
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DemoPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#171311' }}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          className="flex items-center mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            onClick={handleBack}
            variant="ghost"
            className="flex items-center space-x-2 mr-4"
            style={{ color: '#d8cdce' }}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          
          <h1
            className="text-3xl"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: '900',
              color: '#d8cdce'
            }}
          >
            Kombee Demo
          </h1>
        </motion.div>

        <motion.div
          className="relative w-full"
          style={{ paddingBottom: '56.25%' }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&fs=1"
            title="Kombee Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </motion.div>
      </div>
    </div>
  );
};

export default DemoPage;
