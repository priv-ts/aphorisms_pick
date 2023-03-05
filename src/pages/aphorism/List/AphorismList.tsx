import './AphorismList.css'
import Header from '../../../components/Header/Header'
import Card from '../../../components/Card/Card'
import { aphorisms } from '../../../dummyData'

const AphorismList = () => {
  const blogs = await fetch('https://ixy9mgadr5.microcms.io/api/v1/blogs', {
    headers: {
      'X-MICROCMS-API-KEY': 'nTntyalEoVyTAEotusWYGWkqzwgIi1U6vbXh',
    },
  })

  return (
    <>
      <Header />
      <div className="main-content__content">
        <div className="main-content__content__aphorisms">
          {aphorisms.map((aphorism) => (
            <Card aphorism={aphorism} key={aphorism.id} />
          ))}
        </div>
        <div>{blogs}</div>
      </div>
    </>
  )
}

export default AphorismList
