import { Arrow } from '../../../../../components/Arrow'

import { HiOutlineArrowNarrowRight } from 'react-icons/Hi'
import { HiOutlineArrowNarrowLeft } from 'react-icons/Hi'

export const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 3,
  prevArrow: <Arrow right='58px' top='-32px' icon={<HiOutlineArrowNarrowLeft />} />,
  nextArrow: <Arrow right='0' top='-32px' icon={<HiOutlineArrowNarrowRight />} />,
  useTransform: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 6,
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 750,
      settings: {
        prevArrow: <Arrow right='50px' top='-32px' icon={<HiOutlineArrowNarrowLeft />} />,
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 490,
      settings: {
        prevArrow: <Arrow right='50px' top='-32px' icon={<HiOutlineArrowNarrowLeft />} />,
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 420,
      settings: {
        prevArrow: <Arrow right='50px' top='30px' icon={<HiOutlineArrowNarrowLeft />} />,
        nextArrow: <Arrow right='0' top='30px' icon={<HiOutlineArrowNarrowRight />} />,
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 390,
      settings: {
        prevArrow: <Arrow right='50px' top='30px' icon={<HiOutlineArrowNarrowLeft />} />,
        nextArrow: <Arrow right='0' top='30px' icon={<HiOutlineArrowNarrowRight />} />,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
}