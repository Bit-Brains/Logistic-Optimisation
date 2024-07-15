import React from 'react';

const OptionsComponent = () => {
  const handleCustomerClick = () => {
    console.log('Customer clicked');
    // Add your logic for Customer click here
    <h1>Hello Customer</h1>
  };

  const handleSupplierClick = () => {
    console.log('Supplier clicked');
    // Add your logic for Supplier click here
    <h1>Hello Supplier</h1>
  };

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={handleCustomerClick}>
        Customer
      </button>
      <button style={styles.button} onClick={handleSupplierClick}>
        Supplier
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  button: {
    margin: '0 10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default OptionsComponent;
