import { Result, Button } from 'antd';
import Link from 'next/link';
export default function NotFound({ href = '/', text = 'Volver', subTitle = 'No encontrado' }) {

  return <Result
    style={{ color: 'white' }}
    status="404"
    title="404"
    subTitle={subTitle}
    extra={
      < Link href={href} >
        <Button type="primary" >
          {text}
        </Button>
      </Link >
    }
  />
}