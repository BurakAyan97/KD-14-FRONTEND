//rafce
import React from "react";
import "./assets/app.css";

const App = () => {
  //bir ata kapsayıcısı olacak şekilde return etmeliyiz.
  //div içinde div kullanmak istemiyorsak fragment <></> kullanabiliriz.
  const titleName = "Dinamik Başlık";
  const isActive = false;
  const aktifMi = "hayır";
  // const dizim=[true,false,0,"","asd",undefined]
  const courseList = [
    { id: 1, course: "C#", isActive: false },
    { id: 2, course: "SQL", isActive: false },
    { id: 3, course: "REACT", isActive: true },
    { id: 4, course: "RUBY", isActive: false },
    { id: 5, course: "GO", isActive: false },
    { id: 6, course: "PYTHON", isActive: false },
    { id: 7, course: "NODE.JS", isActive: true },
    { id: 8, course: "EXPRESS.JS", isActive: true },
  ];
  const courseList2 = [<li>C#</li>, <li>SQL</li>, <li>GO</li>];
  return (
    <>
      <div className="container">
        <div>DENİZ</div>
        <div>mERT</div>
        <div>Beste</div>
        <Tunahan />
        <Cagdas />
        <h3>Onur</h3>
        <h2>Statik Başlık</h2>
        <h2>{titleName}</h2>
        <h2>Toplam:{5 + 1453}</h2>
        <h2>Course List</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>REACT</li>
        </ul>
        <br />
        <br />
        <ul>{courseList2}</ul>
        <br />
        <br />
        <ul className="map-list">
          {/* {courseList.map(element=><li>{element.id}-{element.course}</li>)} */}
          {courseList.map((kurs) => (
            <li>{`Course Name: ${kurs.id}--${kurs.course}`}</li>
          ))}
        </ul>
        <h4>There are {courseList.length} courses</h4>

        <h3>Course List with Filter</h3>
        <ul className="map-list">
          {courseList
            .filter((kurs) => kurs.course.includes("S"))
            .map((kurs) => (
              <li>{`Course Name: ${kurs.id}--${kurs.course}`}</li>
            ))}
        </ul>

        <ul className="map-list">
          {courseList
            .filter((kurs) => kurs.course.includes("T"))
            .map((kurs) => (
              <li>{`Course Name: ${kurs.id}--${kurs.course}`}</li>
            ))}
        </ul>

        <h3>Course List Conditional Rendering</h3>
        {aktifMi && (
          <div>
            <ul className="map-list">
              {courseList.map((kurs) => (
                <li>{`Course Name: ${kurs.id}--${kurs.course}`}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
    // <div>
    // <div>DENİZ</div>
    // <div>mERT</div>

    // </div>
  );
};

const Tunahan = () => {
  return <div>Tunahan</div>;
};

const Cagdas = () => {
  return <div>Çağdaş</div>;
};

export default App;
// export {Tunahan,Cagdas}
