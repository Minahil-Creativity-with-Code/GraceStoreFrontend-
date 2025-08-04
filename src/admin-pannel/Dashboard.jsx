import React, { useState } from 'react';
import { AiOutlineProduct } from "react-icons/ai";
import { MdSpaceDashboard, MdBorderColor } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { FaUserFriends} from "react-icons/fa";
import { Link } from 'react-router-dom';

const allProducts = [
  { name: 'Bedsheets', price: '$180.00', image: '/B1.jpg' },
  { name: 'Fashion Winter Dress', price: '$130.00 - $150.00', image: '/card1.jpg' },
  { name: 'Party Wear', price: '$130.00 - $150.00', image: '/card4.jpg' },
  { name: 'Fashion Summer Dress', price: '$140.00 - $160.00', image: '/Ad1.jpg' }
];

const allTransactions = [
  { receiver: 'Tesco Market', type: 'Shopping', date: '11 Dec 2020', amount: '$75.67' },
  { receiver: 'ElectroMen Market', type: 'Shopping', date: '14 Dec 2020', amount: '$250.00' },
  { receiver: 'Fiorgio Restaurant', type: 'Food', date: '20 Dec 2020', amount: '$95.00' },
  { receiver: 'John Mathew Kayne', type: 'Sport', date: '25 Dec 2020', amount: '$530' },
  { receiver: 'Ann Marlin', type: 'Shopping', date: '28 Dec 2020', amount: '$430' },
  { receiver: 'Fiorgio Restaurant', type: 'Food', date: '01 Jan 2021', amount: '$19.50' },
];

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Filter products
  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter transactions
  const filteredTransactions = allTransactions.filter(transaction =>
    transaction.receiver.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.amount.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard">
      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <Link to='/dashboard' className="active"><MdSpaceDashboard /> Dashboard</Link>
            <Link to='/products'><AiOutlineProduct /> Products</Link>
            <Link to='/order'><MdBorderColor /> Orders</Link>
            <Link to='/customer'><FaUserFriends /> Customers</Link>
            <Link to='/user'><FaRegUser /> User</Link>
          </ul>
        </nav>
        <div className="support">
          Customer Support<br />
          <Link to='/register'><button>Connect Now</button></Link>
        </div>
        <div className="user-profile">
          <img src="admin.jpg" alt="Admin" className="adminImage" />
          <div className="user-details">
           <div>Admin <br /><Link to='/userProfile' className='view'>View Profile</Link></div>
          </div>
        </div>
         <br />
        <Link to = '/'><button className="logout-button">Logout</button></Link>

      </aside>

      {/* Main Content */}
      <main className="content">
        <header>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </header>

        <section className="greeting">
          <h1>Dashboard</h1>
        </section>

        <section className="products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div key={index} className="product">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p>{product.price}</p>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </section>

        <section className="transactions">
          <h4>Transaction history</h4>
          <table>
            <thead>
              <tr>
                <th>Receiver</th>
                <th>Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((t, index) => (
                  <tr key={index}>
                    <td>{t.receiver}</td>
                    <td>{t.type}</td>
                    <td>{t.amount}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No transactions found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
