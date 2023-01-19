
import { useParams } from 'react-router-dom'

function Item(props) {
    console.log(useParams());
    let { id } = useParams();
    let copy = [...props.animations];
    let animation = copy.find((element, index, array) => {
      return element.id === Number(id);
    })
    return (
      <>
        <div className='background'>
          <div className='window'>
            <div className='container'>
              <img
                className="d-block h-25"
                src={process.env.PUBLIC_URL + `/images/animation_keyVisual/${animation.image_path}.jpg`}
                alt="animation Poster"
              /><br />
              {animation.name}
              <p>{animation.genre1}{animation.genre2 !== null ? ", " + animation.genre2 : null} / {animation.age === "ALL" ? "전체이용가" : animation.age + "세 이상"} / {animation.opening_year}년 {animation.opening_quarter}분기</p>
              <h4>소개글</h4>
              <p>
                {animation.info}
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default Item;