import { addDoc, collection, doc, getDoc, getDocs, getFirestore, limit, query, orderBy, updateDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

export async function updateTicket(ticketid, status) {
  try {
    const ticketRef = doc(firestore, 'ticket', ticketid);
    updateDoc(ticketRef, {status: status}, { merge: true });
    console.log('Document successfully updated!');
  } catch (error) {
    console.error('Error in updating ticket: ', error);
  }
}

export async function signInAuth(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in: ', error)
  }
}

export async function signOutAuth() {
  if (auth.currentUser) {
    signOut(auth)
      .then(() => {
        return;
      }).catch((error) => {
      console.error('Error logging out: ', error)
    })
  }
  return;
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