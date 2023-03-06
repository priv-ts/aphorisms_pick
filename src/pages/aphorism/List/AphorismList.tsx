import './AphorismList.css'
import Header from '../../../components/Header/Header'
import Card from '../../../components/Card/Card'
import { aphorisms } from '../../../dummyData'
import client from '../../../../libs/client'

const AphorismList = () => {
  const blogs = client
    .get({
      endpoint: 'aphorisms',
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

  console.log(blogs)

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
