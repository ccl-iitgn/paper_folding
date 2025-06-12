import { useEffect, useState } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import './App.css';
import { GenPaperA, GenPaperB, GenPaperC, GenPaperD, GenPaperE, GenPaperF, GenPaperG, GenPaperH, GenPaperI, GenPaperJ, GenPaperK, GenPaperL, GenPaperM, GenPaperN } from "./GenPaper";
import { v4 as uuidv4 } from 'uuid';
import JSZip from "jszip";
import { saveAs } from "file-saver";

function App() {
  const [imag, setImag] = useState(null);
  const [loading, setloading] = useState(false)
  const [croppedImg1, setCroppedImg1] = useState("/image0.png")
  const [croppedImg2, setCroppedImg2] = useState("/image1.png")
  const [selectedAll, setSelectedAll] = useState(false)
  const [allpuzzles, setAllpuzzles] = useState([])
  const [activeIndex, setActiveIndex] = useState(true)

  const [func, setFunction] = useState()
  let functions = [
    { func: GenPaperA, imag: "/type1.png" },
    { func: GenPaperB, imag: "/type2.png" },
    { func: GenPaperC, imag: "/type3.png" },
    { func: GenPaperD, imag: "/type4.png" },
    { func: GenPaperE, imag: "/type5.png" },
    { func: GenPaperF, imag: "/type6.png" },
    { func: GenPaperG, imag: "/type7.png" },
    { func: GenPaperH, imag: "/type8.png" },
    { func: GenPaperI, imag: "/type9.png" },
    { func: GenPaperJ, imag: "/type10.png" },
    { func: GenPaperK, imag: "/type11.png" },
    { func: GenPaperL, imag: "/type12.png" },
    { func: GenPaperM, imag: "/type13.png" },
    { func: GenPaperN, imag: "/type14.png" },
  ]
  /**
 * @param {string[]} dataUrls
 * @param {string} zipName
 */
  const downloadImagesAsZip = async (dataUrls, zipName = "images.zip") => {
    const zip = new JSZip();
    dataUrls.forEach((dataUrl, index) => {
      const base64Data = dataUrl.split(",")[1];
      zip.file(`type${index + 1}.png`, base64Data, { base64: true });
    });

    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, zipName);
  };
  const genAllpuzzles = async (url1, url2) => {
    setloading(true)
    if (selectedAll) {
      let tempimgs = []
      for (let func of functions) {
        let img = await func.func(url1, url2)
        tempimgs.push(img)
      }
      setAllpuzzles(tempimgs)
    }
    setloading(false)
  }
  useEffect(() => {
    if (func) {
      setloading(true);
      func(croppedImg1, croppedImg2)
        .then(setImag)
        .finally(() => setloading(false));
    }

  }, [func]);
  useEffect(() => {
    if (selectedAll) {
      genAllpuzzles(croppedImg1, croppedImg2)
    }
  }, [selectedAll])

  return (
    <>
      <h1>Paper Folding Puzzle</h1>
      <div className='info-container'>
        <p>Begin by selecting a label from the available options. Next, upload two images of your choice. Once the images are uploaded, download the generated output and print it on paper. After printing, fold the paper so that one image appears on one side and the second image appears on the reverse side.</p>
      </div>
      {selectedAll ?
        <main className="image-gen-container">

          <div className='image-gen-back-btn' onClick={() => {
            setFunction(null)
            setSelectedAll(false)
          }}>
            <span><IoMdArrowRoundBack /></span>
          </div>
          <form
            className="upload-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (croppedImg1 && croppedImg2 && selectedAll) {
                genAllpuzzles(croppedImg1, croppedImg2)
              }
            }}
          >
            <div className='upload-img-btns'>
              <div className="upload-group">
                <div className="image-preview-container">
                  <img
                    src={croppedImg1}
                    alt="First preview"
                    className="preview-image"
                  />
                </div>
                <label className="file-input-label">
                  <span>Choose First Image</span>
                  <input
                    type="file"
                    name="file1"
                    className="file-input"
                    accept="image/*"
                    onChange={(e) => {
                      setCroppedImg1(URL.createObjectURL(e.target.files[0]))
                    }}
                  />
                </label>
              </div>

              <div className="upload-group">
                <div className="image-preview-container">
                  <img
                    src={croppedImg2}
                    alt="Second preview"
                    className="preview-image"
                  />
                </div>
                <label className="file-input-label">
                  <span>Choose Second Image</span>
                  <input
                    type="file"
                    name="file2"
                    className="file-input"
                    accept="image/*"
                    onChange={(e) => {
                      setCroppedImg2(URL.createObjectURL(e.target.files[0]))
                    }}
                  />
                </label>
              </div>
            </div>

            <button type="submit" className="submit-button">
              Generate puzzles
              <span className="button-icon">→</span>
            </button>
          </form>
          {loading ?
            <div className="result-container" >
              <div className='laoding-conatiner'>
                <img src="/load.gif" alt="loading-gif" />
              </div>
            </div> :
            <div className="result-container">
              {allpuzzles ?
                <div>
                  <button
                    className='download-btn'
                    onClick={() => {
                      let name = `${uuidv4()}.zip`;
                      downloadImagesAsZip(allpuzzles, name)
                    }}
                  >
                    Download All
                  </button>
                  {allpuzzles.map((item, inx) => {
                    return (
                      (
                        <div key={inx} className='result-image'>
                          <img
                            src={item}
                            alt="Generated comparison"

                          />
                        </div>
                      )
                    )
                  })}
                </div> : (
                  <div className="placeholder-container">
                    <img
                      src="/bgimage.png"
                      alt="Preview placeholder"
                      className="placeholder-image"
                    />
                    <p className="placeholder-text">Your generated image will appear here</p>
                  </div>
                )}
            </div>}

        </main> :
        <>
          {func ? <main className="image-gen-container">
            <div className='image-gen-back-btn' onClick={() => {
              setFunction(null)
              setSelectedAll(false)
            }}>
              <span><IoMdArrowRoundBack /></span>
            </div>
            <form
              className="upload-form"
              onSubmit={(e) => {
                e.preventDefault();
                if (croppedImg1 && croppedImg2 && func) {
                  setloading(true);
                  func(croppedImg1, croppedImg2)
                    .then(setImag)
                    .finally(() => setloading(false));
                }
              }}
            >
              <div className='upload-img-btns'>
                <div className="upload-group">
                  <div className="image-preview-container">
                    <img
                      src={croppedImg1}
                      alt="First preview"
                      className="preview-image"
                    />
                  </div>
                  <label className="file-input-label">
                    <span>Choose First Image</span>
                    <input
                      type="file"
                      name="file1"
                      className="file-input"
                      accept="image/*"
                      onChange={(e) => {
                        setCroppedImg1(URL.createObjectURL(e.target.files[0]))
                      }}
                    />
                  </label>
                </div>

                <div className="upload-group">
                  <div className="image-preview-container">
                    <img
                      src={croppedImg2}
                      alt="Second preview"
                      className="preview-image"
                    />
                  </div>
                  <label className="file-input-label">
                    <span>Choose Second Image</span>
                    <input
                      type="file"
                      name="file2"
                      className="file-input"
                      accept="image/*"
                      onChange={(e) => {
                        setCroppedImg2(URL.createObjectURL(e.target.files[0]))
                      }}
                    />
                  </label>
                </div>
              </div>

              <button type="submit" className="submit-button">
                Generate Puzzle
                <span className="button-icon">→</span>
              </button>
            </form>
            {loading ?
              <div className="result-container" >
                <div className='laoding-conatiner'>
                  <img src="/load.gif" alt="loading-gif" />
                </div>
              </div> :
              <div className="result-container">
                {imag ? (
                  <div className='result-image'>
                    <img
                      src={imag}
                      alt="Generated comparison"

                    />
                    <button
                      className='download-btn'
                      onClick={() => {
                        if (!imag) return;
                        let name = `${uuidv4()}.png`;
                        const link = document.createElement('a');
                        link.href = imag;
                        link.download = name;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      Download
                    </button>

                  </div>
                ) : (
                  <div className="placeholder-container">
                    <img
                      src="/bgimage.png"
                      alt="Preview placeholder"
                      className="placeholder-image"
                    />
                    <p className="placeholder-text">Your generated image will appear here</p>
                  </div>
                )}
              </div>}

          </main> :
            <main className="function-selector-container">
              <div
                className={`function-card ${0 === activeIndex ? 'active' : ''}`}
                onClick={() => {
                  setSelectedAll(true)
                }}
              >
                <div className="card-image-container">
                  <img
                    src={"/combined.png"}
                    alt={`Paper Folder All Types`}
                    className="function-image"
                  />
                  <div className="card-overlay">
                    <span className="overlay-text">Select All</span>
                  </div>
                </div>
                <h3 className="card-title">Paper Folding All Types</h3>
                {/* <p className="card-description">{item.description || "Standard document folding"}</p> */}
              </div>
              {functions.map((item, index) => (
                <div
                  key={index}
                  className={`function-card ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => {
                    setFunction(() => item.func);
                    setActiveIndex(index);
                  }}
                >
                  <div className="card-image-container">
                    <img
                      src={item.imag}
                      alt={`Paper Folder Label ${index + 1}`}
                      className="function-image"
                    />
                    <div className="card-overlay">
                      <span className="overlay-text">Select</span>
                    </div>
                  </div>
                  <h3 className="card-title">Paper Folding Label {index + 1}</h3>
                  {/* <p className="card-description">{item.description || "Standard document folding"}</p> */}
                </div>
              ))}
            </main>}
        </>
      }

    </>
  );
}

export default App;
