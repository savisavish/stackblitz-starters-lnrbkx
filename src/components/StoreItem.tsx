import { Card } from 'react-bootstrap';
type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  return (
    <Card>
      <Card.Img src={imgUrl}></Card.Img>
    </Card>
  );
}
