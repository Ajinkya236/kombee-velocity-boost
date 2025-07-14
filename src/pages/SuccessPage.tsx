
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#171311' }}>
      <motion.div
        className="text-center max-w-md mx-auto px-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <CheckCircle className="h-20 w-20 mx-auto" style={{ color: '#d8cdce' }} />
        </motion.div>
        
        <motion.h1
          className="text-3xl mb-6"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: '900',
            color: '#d8cdce'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Thank You!
        </motion.h1>
        
        <motion.p
          className="text-lg mb-8"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: '400',
            color: '#d8cdce'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          We'll get back to you shortly
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            onClick={handleBack}
            className="flex items-center space-x-2"
            style={{
              backgroundColor: '#d8cdce',
              color: '#171311',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '400'
            }}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
