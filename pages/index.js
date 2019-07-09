import feeds from '../data/feeds';
import Page from '../components/Page';
import FeedList from '../components/feed-list';

export default function Index() {
  return (
    <Page>
      <FeedList feeds={feeds} />
    </Page>
  );
}
