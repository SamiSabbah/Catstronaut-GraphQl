import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';
import TrackCard from '../containers/track-card';
import { QueryResult } from '../components';

export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`;
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      {data?.tracksForHome?.map((track) => (
        <QueryResult key={track.id} loading={loading} error={error} data={data}>
          <TrackCard track={track} />
        </QueryResult>
      ))}
    </Layout>
  );
};

export default Tracks;
