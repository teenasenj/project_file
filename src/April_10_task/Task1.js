
import './Task1.css';

function Heading()
 {
  return (<>
    <h1 className="blue">"Food Court"</h1>
    <hr></hr>
    </>
  );
}
function Body()
{
    return(
        <>
        <div className='section1'>
            Common types of food court include a type which is spacious and has a lot of space <br></br>
            for consumers to sit, but does not have much food to buy. Another type is a food court <br></br>
            which is small,and does not have an area for consumers to sit in, but has a lot of types <br></br>
            of food open to consumption. <br></br>
           The former type of food court, in 3rd world nations may not have as much profit,  <br></br>
         because people in those areas will generally want different types of food.</div>
         <br></br>
         <a href='https://en.wikipedia.org/wiki/Food_court'>More info</a>

         <div  className='section2'>
           Food courts in shopping malls are a gastronomic destination for generally want different types of food.
           shopaholics and foodies alike, enabling the food and beverage industry to gain a competitive
           edge in the market. Gone are the days when malls were considered only shopping destinations,
           offering simply multitudes of retail shopping outlets.<br></br>
           With the advent of globalization coupled with a well-travelled consumer,shopping malls 
           have metamorphosed into community hubs, providing exceptional experiences to
           consumers.</div>
         </>
    );
}

export { Heading ,Body} ;
