import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemListContainer.css'; 

import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

function ItemListContainer() {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const { condition, genre } = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const db = getFirestore();
      const productsCollection = collection(db, 'productos');
      let q = productsCollection;

      if (condition && genre) {
        q = query(productsCollection, where('condition', '==', condition), where('genre', '==', genre));
      } else if (condition) {
        q = query(productsCollection, where('condition', '==', condition));
      } else if (genre) {
        q = query(productsCollection, where('genre', '==', genre));
      }

      const querySnapshot = await getDocs(q);
      setBooks(querySnapshot.docs.map(doc => doc.data()));
      setLoading(false);
    }
    
    fetchData();
  }, [condition, genre]);

  return (
    <main>
      <br />

      {loading ? ( 
        <div>No books available</div>
      ) : (
        <section className="books-container">  

          {books.map(item => (
            <Link key={item.id} to={`/item/${item.id}`}>   

              <div className="book-card">
                <Card>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>   
                    <Card.Subtitle>Author: {item.author}</Card.Subtitle>
                    <Card.Text>Price: ${item.price}</Card.Text>
                    <Button className="info-button" variant="secondary" size="lg">More</Button>
                  </Card.Body>
                </Card>
              </div>

            </Link>
          ))}

        </section>
      )}
    
    </main>
  )

}

export default ItemListContainer;
