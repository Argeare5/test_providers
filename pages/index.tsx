import React, { useEffect } from 'react';

import { useStore } from '../src/store';
import { Container } from '../src/ui';

export default function Home() {
  const getProposalsIdsNew = useStore((store) => store.getProposalsIdsNew);
  const detailedProposalsDataNew = useStore(
    (store) => store.detailedProposalsDataNew,
  );

  useEffect(() => {
    getProposalsIdsNew();
  }, []);

  console.log('detailedProposalsDataNew', detailedProposalsDataNew);

  return (
    <>
      <h1>Test providers</h1>
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <>
      <Container size="normal">{page}</Container>
    </>
  );
};
