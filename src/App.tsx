import React from 'react';
import Layout from '@/components/layout/Layout';
import ListTabs from '@/components/list-tabs/ListTabs';
import ErrorBoundary from '@/components/error-boundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <ListTabs />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
