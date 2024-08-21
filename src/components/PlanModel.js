import React from 'react';

const PlanModel = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#1c1c1c',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '600px',
          width: '90%',
          color: 'white',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '20px',
            cursor: 'pointer',
          }}
          onClick={onClose}
        >
          X
        </button>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <button
            style={{
              backgroundColor: '#4a4aff',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          >
            Monthly
          </button>
          <button
            style={{
              backgroundColor: '#333',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          >
            Annually
          </button>
          <button
            style={{
              backgroundColor: '#ff6a00',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          >
            Save 16%
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              backgroundColor: '#5a5858',
              padding: '15px',
              borderRadius: '10px',
              width: '30%',
              textAlign: 'center',
            }}
          >
            <h2 style={{ color: '#fff', fontSize: '20px' }}>FREE</h2>
            <h3 style={{ color: '#fff', fontSize: '24px', margin: '10px 0' }}>
              ₹0/mo
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', color: '#bbb' }}>
                Basic Usage Volume
              </li>
              <li style={{ marginBottom: '10px', color: '#bbb' }}>
                Supports 200+ Languages
              </li>
              <li style={{ marginBottom: '10px', color: '#bbb' }}>
                Limited Pro Features
              </li>
            </ul>
            <button
              style={{
                backgroundColor: '#363669',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                borderRadius: '5px',
                marginTop: '10px',
              }}
            >
              Subscribe
            </button>
          </div>
          <div
            style={{
              backgroundColor: '#5a5858',
              padding: '15px',
              borderRadius: '10px',
              width: '30%',
              textAlign: 'center',
            }}
          >
            <h2 style={{ color: '#fff', fontSize: '20px' }}>PRO</h2>
            <h3 style={{ color: '#fff', fontSize: '24px', margin: '10px 0' }}>
              ₹691.4/mo
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', color: '#bbb' }}>
                Large Usage Volume
              </li>
              <li style={{ marginBottom: '10px', color: '#bbb' }}>
                Full Access to Chat PDF
              </li>
              <li style={{ marginBottom: '10px', color: '#bbb' }}>
                Full Access to AI Presentation
              </li>
            </ul>
            <button
              style={{
                backgroundColor: '#363669',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                borderRadius: '5px',
                marginTop: '10px',
              }}
            >
              Subscribe
            </button>
          </div>
          <div
            style={{
              backgroundColor: '#c976c1',
              padding: '15px',
              borderRadius: '10px',
              width: '30%',
              textAlign: 'center',
            }}
          >
            <h2 style={{ color: '#fff', fontSize: '20px' }}>Unlimited</h2>
            <h3 style={{ color: '#fff', fontSize: '24px', margin: '10px 0' }}>
              ₹2746.3/mo
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', color: '#bbb' }}>
                Unlimited Usage Volume
              </li>
              <li style={{ marginBottom: '10px', color: '#bbb' }}>
                Unlimited Chat PDF
              </li>
              <li style={{ marginBottom: '10px', color: '#bbb' }}>
                Unlimited AI Presentation
              </li>
            </ul>
            <button
              style={{
                backgroundColor: '#363669',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                borderRadius: '5px',
                marginTop: '10px',
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanModel;
