import { FC } from 'react'
import { Card } from 'flowbite-react'
import PhoneIcon from '@heroicons/react/24/outline/PhoneIcon'

interface CardSedeProps {
  name: string
  telefonos: string[]
}

const CardSede: FC<CardSedeProps> = ({ name, telefonos }) => (
  <Card className='w-full'>
    <div className='h-full'>
      <h3 className="text-xl md:text-2xl font-bold mb-4 leading-none">{name}</h3>
      <ul className="divide-y ">
        {telefonos.map((tel) => (
          <li className="py-3 sm:py-4" key={tel}>
            <PhoneIcon className="inline h-6 mr-6" />
            {tel}
          </li>
        ))}
      </ul>
    </div>
  </Card>
)

export default CardSede
