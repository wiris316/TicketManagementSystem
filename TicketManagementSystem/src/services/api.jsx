import { addDoc, collection, doc, getDoc, getDocs, getFirestore, onSnapshot, updateDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
}

const app = initializeApp(firebaseConfig);
const firestore = getFirestore();
const ticketCollection = collection(firestore, 'ticket');

export async function fetchTickets() {
  try {
    const ticketSnapshot = await getDocs(ticketCollection);
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
    const ticketRef = doc(firestore, 'ticket', ticketid)
    await updateDoc(ticketRef, {
      status: status,
      }, { merge: true })
      .then(() => {
        console.log('Document successfully updated!');
      })
      .catch((error) => {
          console.error('Error updating document: ', error);
      });

  } catch (error) {
    console.error('Error in updating ticket', error);
  }
}