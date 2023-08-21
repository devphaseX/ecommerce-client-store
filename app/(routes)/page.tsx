import { getBillboard } from '@/actions/get-billboard';
import { BillboardBanner } from '@/components/billboard';
import { Container } from '@/components/ui/container';

export const revalidate = 0;
const HomePage = async () => {
  const billboard = await getBillboard({
    id: '87c382ca-a665-46c2-8567-918b177611db',
  });

  console.log(billboard);
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <BillboardBanner data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
