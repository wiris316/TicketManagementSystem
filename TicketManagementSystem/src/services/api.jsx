import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
}

const app = initializeApp(firebaseConfig);
const firestore = getFirestore();

export async function fetchTickets() {
  try {
    const ticketCollection = collection(firestore, 'ticket');
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
    const ticketCollection = collection(firestore, 'ticket');
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