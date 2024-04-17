import { getFirestore, collection, getDocs } from 'firebase/firestore';

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
