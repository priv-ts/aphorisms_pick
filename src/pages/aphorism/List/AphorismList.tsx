import './AphorismList.css'
import Header from '../../../components/Header/Header'
import Card from '../../../components/Card/Card'

const AphorismList = () => {
  return (
    <>
      <Header />
      <div className="main-content__content">
        <div className="main-content__content__aphorisms">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}

export default AphorismList
