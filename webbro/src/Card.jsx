import ppf from "./assets/my-notion-face-portrait.png"
function Card(){
    return(

        <div className="card">
                        <img className="cardimage" src={ppf} alt="ben 10" />
            <h2 className=" brocode"> Bro code </h2>
            <p className="cardp"> I love to code and make millions of dollars </p>
        </div>
    );

    

}
export default Card;