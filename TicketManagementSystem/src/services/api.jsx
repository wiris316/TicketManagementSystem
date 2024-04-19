import { addDoc, collection, doc, getDoc, getDocs, getFirestore, limit, query, orderBy } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
}

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth();
const ticketCollection = collection(firestore, 'ticket');
const sortedQuery = query(ticketCollection, orderBy('createdAt', 'desc'), limit(50));

export async function fetchTickets() {
  try {
    const ticketSnapshot = await getDocs(sortedQuery);
    const ticketData= ticketSnapshot.docs.map(doc => ({ id:doc.id, ...doc.data()}));
    console.log('Successfully fetched ticket data.')
    return ticketData;
  } catch (error) {
    console.error('Error fetching ticket data:', error);
  }
}

export async function submitTicket(description, email, name, subject) {
  try {
    await addDoc(ticketCollection, {
      createdAt: new Date(),
      description: description,
      email: email,
      name: name,
      status: 'new',
      subject: subject,
    })
    console.log('Successfully submitted ticket.')
  } catch (error) {
    console.error('Error in submitting ticket:', error)
  }
}

export async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in', error);
  }
}

export async function getUser(email) {
  try {
    const docRef = doc(firestore, 'person', email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log('Can not find user');
    }
  } catch (error) {
    console.log('Error fetching user data', error);
  }
}