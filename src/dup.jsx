
const GenPaperA = (url1, url2) => {
    return new Promise((resolve, reject) => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const img6 = new Image();
        const img7 = new Image();
        const bgImg = new Image();

        img1.crossOrigin = "anonymous";
        img2.crossOrigin = "anonymous";
        img3.crossOrigin = "anonymous";
        img4.crossOrigin = "anonymous";
        img5.crossOrigin = "anonymous";
        img6.crossOrigin = "anonymous";
        img7.crossOrigin = "anonymous";
        bgImg.crossOrigin = "anonymous";

        img1.src = url1;
        img2.src = url2;
        img3.src = url1;
        img4.src = url2;
        img5.src = url1;
        img6.src = url2;
        img7.src = url2;

        bgImg.src = "/bgimage.png";

        let cropped1 = null;
        let cropped2 = null;
        let cropped3 = null;
        let cropped4 = null;
        let cropped5 = null;
        let cropped6 = null;
        let cropped7 = null;
        let bgLoaded = false;

        const tryCombine = () => {
            if (cropped1 && cropped2 && cropped3 && cropped4 && cropped5 && bgLoaded) {
                const finalCanvas = document.createElement("canvas");
                finalCanvas.width = 2000;
                finalCanvas.height = 2000;
                const ctx = finalCanvas.getContext("2d");

                ctx.drawImage(bgImg, 0, 0, finalCanvas.width, finalCanvas.height);

                const imgA = new Image();
                const imgB = new Image();
                const imgC = new Image();
                const imgD = new Image();
                const imgE = new Image();
                const imgF = new Image();
                const imgG = new Image();
                imgA.onload = () => {
                    imgB.onload = () => {
                        imgC.onload = () => {
                            imgD.onload = () => {
                                imgE.onload = () => {
                                    imgF.onload = () => {
                                        imgG.onload = () => {
                                            ctx.drawImage(imgA, -250, 0, 1000, 1000);
                                            ctx.drawImage(imgB, -250, 500, 1000, 1000);
                                            ctx.drawImage(imgC, 1000, -250, 1000, 1000);
                                            ctx.drawImage(imgD, 1000, 750, 1000, 1000);
                                            ctx.drawImage(imgE, 1000, 1750, 1000, 1000);
                                            ctx.drawImage(imgF, 0, 1000, 1000, 1000);
                                            ctx.drawImage(imgG, 0, -250, 1000, 1000);
                                            const finalUrl = finalCanvas.toDataURL();
                                            resolve(finalUrl);
                                        }
                                        imgG.src = cropped7
                                    }
                                    imgF.src = cropped6
                                }
                                imgE.src = cropped5
                            };
                            imgD.src = cropped4
                        };
                        imgC.src = cropped3;
                    };
                    imgB.src = cropped2;
                };
                imgA.src = cropped1;
            }
        };

        img1.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            let x = 0, y = 0;
            let w = 1000, h = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(250, 0);
            ctx.lineTo(750, 500);
            ctx.lineTo(250, 500);
            ctx.closePath();
            ctx.clip();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img1, -w / 2, -h / 2, w, h);
            cropped1 = canvas.toDataURL();
            tryCombine();
        };

        img2.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            let x = 0, y = 0;
            let w = 1000, h = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(250, 0);
            ctx.lineTo(750, 0);
            ctx.lineTo(1000, 250);
            ctx.lineTo(250, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img2, -w / 2, -h / 2, w, h);
            cropped2 = canvas.toDataURL();
            tryCombine();
        };
        img3.onload = () => {
            const canvas = document.createElement("canvas");
            const w = 1000, h = 1000;
            const x = 0, y = 0;

            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(0, 750);
            ctx.lineTo(500, 250);
            ctx.lineTo(1000, 250);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();

            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img3, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped3 = canvas.toDataURL();
            tryCombine();
        };

        img4.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(250, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 750);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img4, 0, 0, 1000, 1000);
            cropped4 = canvas.toDataURL();
            tryCombine();
        };
        img5.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 250);
            ctx.lineTo(0, 250);
            ctx.closePath();
            ctx.clip();

            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img5, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped5 = canvas.toDataURL();
            tryCombine();
        };
        img6.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 750);
            ctx.lineTo(1000, 750);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img6, 0, 0, 1000, 1000);
            cropped6 = canvas.toDataURL();
            tryCombine();
        };
        img7.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(750, 1000);
            ctx.lineTo(1000, 750);
            ctx.lineTo(1000, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img7, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped7 = canvas.toDataURL();
            tryCombine();
        };
        bgImg.onload = () => {
            bgLoaded = true;
            tryCombine();
        };

        img1.onerror = reject;
        img2.onerror = reject;
        img3.onerror = reject;
        img4.onerror = reject;
        img5.onerror = reject;
        img6.onerror = reject;
        img7.onerror = reject;
        bgImg.onerror = reject;
    });
};
const GenPaperB = (url1, url2) => {
    return new Promise((resolve, reject) => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const img6 = new Image();
        const img7 = new Image();
        const img8 = new Image();
        const bgImg = new Image();

        img1.crossOrigin = "anonymous";
        img2.crossOrigin = "anonymous";
        img3.crossOrigin = "anonymous";
        img4.crossOrigin = "anonymous";
        img5.crossOrigin = "anonymous";
        img6.crossOrigin = "anonymous";
        img7.crossOrigin = "anonymous";
        img8.crossOrigin = "anonymous";
        bgImg.crossOrigin = "anonymous";

        img1.src = url1;
        img2.src = url2;
        img3.src = url1;
        img4.src = url2;
        img5.src = url1;
        img6.src = url2;
        img7.src = url1;
        img8.src = url2;
        bgImg.src = "/bgimage.png";

        let cropped1 = null;
        let cropped2 = null;
        let cropped3 = null;
        let cropped4 = null;
        let cropped5 = null;
        let cropped6 = null;
        let cropped7 = null;
        let cropped8 = null;
        let bgLoaded = false;

        const tryCombine = () => {
            if (cropped1 && cropped2 && cropped3 && cropped4 && cropped5 && cropped6 && bgLoaded) {
                const finalCanvas = document.createElement("canvas");
                finalCanvas.width = 2000;
                finalCanvas.height = 2000;
                const ctx = finalCanvas.getContext("2d");

                ctx.drawImage(bgImg, 0, 0, finalCanvas.width, finalCanvas.height);

                const imgA = new Image();
                const imgB = new Image();
                const imgC = new Image();
                const imgD = new Image();
                const imgE = new Image();
                const imgF = new Image();
                const imgG = new Image();
                const imgH = new Image();
                imgA.onload = () => {
                    imgB.onload = () => {
                        imgC.onload = () => {
                            imgD.onload = () => {
                                imgE.onload = () => {
                                    imgF.onload = () => {
                                        imgG.onload = () => {
                                            imgH.onload = () => {
                                                ctx.drawImage(imgA, 0, 1000, 1000, 1000);
                                                ctx.drawImage(imgB, 1000, 1000, 1000, 1000);
                                                ctx.drawImage(imgC, 0, 0, 1000, 1000);
                                                ctx.drawImage(imgD, 1000, 0, 1000, 1000);
                                                ctx.drawImage(imgE, 0, 0, 1000, 1000);
                                                ctx.drawImage(imgF, 1000, 0, 1000, 1000);
                                                ctx.drawImage(imgG, 500, 0, 1000, 1000);
                                                ctx.drawImage(imgH, 500, 0, 1000, 1000);
                                                const finalUrl = finalCanvas.toDataURL();
                                                resolve(finalUrl);
                                            }
                                            imgH.src = cropped8
                                        }
                                        imgG.src = cropped7
                                    }
                                    imgF.src = cropped6
                                }
                                imgE.src = cropped5
                            };
                            imgD.src = cropped4
                        };
                        imgC.src = cropped3;
                    };
                    imgB.src = cropped2;
                };
                imgA.src = cropped1;
            }
        };

        img1.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(500, 500);
            ctx.lineTo(1000, 500);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();

            ctx.drawImage(img1, 0, 0, 1000, 1000);
            cropped1 = canvas.toDataURL();
            tryCombine();
        };

        img2.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(500, 500);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();

            ctx.drawImage(img2, 0, 0, 1000, 1000);
            cropped2 = canvas.toDataURL();
            tryCombine();
        };
        img3.onload = () => {
            const canvas = document.createElement("canvas");
            const w = 1000, h = 1000;
            const x = 0, y = 0;

            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(250, 0);
            ctx.lineTo(250, 250);
            ctx.lineTo(500, 500);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();

            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(-(Math.PI / 2));
            ctx.drawImage(img3, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped3 = canvas.toDataURL();
            tryCombine();
        };

        img4.onload = () => {
            const canvas = document.createElement("canvas");
            const w = 1000, h = 1000;
            const x = 0, y = 0;

            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(750, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(500, 500);
            ctx.lineTo(750, 250);
            ctx.closePath();
            ctx.clip();

            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img4, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped4 = canvas.toDataURL();
            tryCombine();
        };
        img5.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 500);
            ctx.lineTo(750, 250);
            ctx.lineTo(1000, 500);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img5, 0, 0, 1000, 1000);

            cropped5 = canvas.toDataURL();
            tryCombine();
        };
        img6.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(250, 250);
            ctx.lineTo(500, 500);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img6, 0, 0, 1000, 1000);

            cropped6 = canvas.toDataURL();
            tryCombine();
        };
        img7.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(250, 0);
            ctx.lineTo(500, 0);
            ctx.lineTo(250, 250);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(-(Math.PI / 2));
            ctx.drawImage(img7, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped7 = canvas.toDataURL();
            tryCombine();
        };
        bgImg.onload = () => {
            bgLoaded = true;
            tryCombine();
        };
        img8.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 0);
            ctx.lineTo(750, 0);
            ctx.lineTo(750, 250);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img8, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped8 = canvas.toDataURL();
            tryCombine();
        };
        bgImg.onload = () => {
            bgLoaded = true;
            tryCombine();
        };

        img1.onerror = reject;
        img2.onerror = reject;
        img3.onerror = reject;
        img4.onerror = reject;
        img5.onerror = reject;
        img6.onerror = reject;
        bgImg.onerror = reject;
    });
};

const GenPaperD = (url1, url2) => {
    return new Promise((resolve, reject) => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const img6 = new Image();
        const bgImg = new Image();

        img1.crossOrigin = "anonymous";
        img2.crossOrigin = "anonymous";
        img3.crossOrigin = "anonymous";
        img4.crossOrigin = "anonymous";
        img5.crossOrigin = "anonymous";
        img6.crossOrigin = "anonymous";
        bgImg.crossOrigin = "anonymous";

        img1.src = url1;
        img2.src = url2;
        img3.src = url1;
        img4.src = url2;
        img5.src = url1;
        img6.src = url2;

        bgImg.src = "/bgimage.png";

        let cropped1 = null;
        let cropped2 = null;
        let cropped3 = null;
        let cropped4 = null;
        let cropped5 = null;
        let cropped6 = null;
        let bgLoaded = false;

        const tryCombine = () => {
            if (cropped1 && cropped2 && cropped3 && cropped4 && cropped5 && cropped6 && bgLoaded) {
                const finalCanvas = document.createElement("canvas");
                finalCanvas.width = 2000;
                finalCanvas.height = 2000;
                const ctx = finalCanvas.getContext("2d");

                ctx.drawImage(bgImg, 0, 0, finalCanvas.width, finalCanvas.height);

                const imgA = new Image();
                const imgB = new Image();
                const imgC = new Image();
                const imgD = new Image();
                const imgE = new Image();
                const imgF = new Image();
                imgA.onload = () => {
                    imgB.onload = () => {
                        imgC.onload = () => {
                            imgD.onload = () => {
                                imgE.onload = () => {
                                    imgF.onload = () => {
                                        ctx.drawImage(imgA, 0, 0, 1000, 1000);
                                        ctx.drawImage(imgB, 1000, 0, 1000, 1000);
                                        ctx.drawImage(imgC, 0, 1000, 1000, 1000);
                                        ctx.drawImage(imgD, 1000, 1000, 1000, 1000);
                                        ctx.drawImage(imgE, -250, 1250, 1000, 1000);
                                        ctx.drawImage(imgF, 1500, 1500, 1000, 1000);
                                        const finalUrl = finalCanvas.toDataURL();
                                        resolve(finalUrl);
                                    }
                                    imgF.src = cropped6
                                }
                                imgE.src = cropped5
                            };
                            imgD.src = cropped4
                        };
                        imgC.src = cropped3;
                    };
                    imgB.src = cropped2;
                };
                imgA.src = cropped1;
            }
        };

        img1.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(250, 250);
            ctx.lineTo(250, 750);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img1, 0, 0, 1000, 1000);
            cropped1 = canvas.toDataURL();
            tryCombine();
        };

        img2.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 500);
            ctx.lineTo(750, 250);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img2, 0, 0, 1000, 1000);
            cropped2 = canvas.toDataURL();
            tryCombine();
        };
        img3.onload = () => {
            const canvas = document.createElement("canvas");
            const w = 1000, h = 1000;
            const x = 0, y = 0;

            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(1000, 0);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(500, 500);
            ctx.closePath();
            ctx.clip();

            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(-(Math.PI / 2));
            ctx.drawImage(img3, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped3 = canvas.toDataURL();
            tryCombine();
        };

        img4.onload = () => {
            const canvas = document.createElement("canvas");
            const w = 1000, h = 1000;
            const x = 0, y = 0;

            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(500, 500);
            ctx.lineTo(500, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();

            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img4, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped4 = canvas.toDataURL();
            tryCombine();
        };
        img5.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(250, 750);
            ctx.lineTo(500, 500);
            ctx.lineTo(750, 750);
            ctx.closePath();
            ctx.clip();

            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(-(Math.PI / 2));
            ctx.drawImage(img5, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped5 = canvas.toDataURL();
            tryCombine();
        };
        img6.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(250, 250);
            ctx.lineTo(500, 0);
            ctx.lineTo(500, 500);
            ctx.closePath();
            ctx.clip();

            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(-(Math.PI / 2));
            ctx.drawImage(img6, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped6 = canvas.toDataURL();
            tryCombine();
        };
      
        bgImg.onload = () => {
            bgLoaded = true;
            tryCombine();
        };

        img1.onerror = reject;
        img2.onerror = reject;
        img3.onerror = reject;
        img4.onerror = reject;
        img5.onerror = reject;
        img6.onerror = reject;
        bgImg.onerror = reject;
    });
};
const GenPaperF = (url1, url2) => {
    return new Promise((resolve, reject) => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const bgImg = new Image();

        img1.crossOrigin = "anonymous";
        img2.crossOrigin = "anonymous";
        img3.crossOrigin = "anonymous";
        img4.crossOrigin = "anonymous";
        img5.crossOrigin = "anonymous";
        bgImg.crossOrigin = "anonymous";

        img1.src = url1;
        img2.src = url2;
        img3.src = url1;
        img4.src = url2;
        img5.src = url1;
        bgImg.src = "/bgimage.png";

        let cropped1 = null;
        let cropped2 = null;
        let cropped3 = null;
        let cropped4 = null;
        let cropped5 = null;
        let bgLoaded = false;

        const tryCombine = () => {
            if (cropped1 && cropped2 && cropped3 && cropped4 && cropped5 && bgLoaded) {
                const finalCanvas = document.createElement("canvas");
                finalCanvas.width = 2000;
                finalCanvas.height = 2000;
                const ctx = finalCanvas.getContext("2d");

                ctx.drawImage(bgImg, 0, 0, finalCanvas.width, finalCanvas.height);

                const imgA = new Image();
                const imgB = new Image();
                const imgC = new Image();
                const imgD = new Image();
                const imgE = new Image();
                imgA.onload = () => {
                    imgB.onload = () => {
                        imgC.onload = () => {
                            imgD.onload = () => {
                                imgE.onload = () => {
                                    ctx.drawImage(imgA, 0, 0, 1000, 1000);
                                    ctx.drawImage(imgB, 1000, 0, 1000, 1000);
                                    ctx.drawImage(imgC, 500, 500, 1000, 1000);
                                    ctx.drawImage(imgD, 0, 1000, 1000, 1000);
                                    ctx.drawImage(imgE, 1000, 1000, 1000, 1000);
                                    const finalUrl = finalCanvas.toDataURL();
                                    resolve(finalUrl);
                                }
                                imgE.src = cropped5
                            };
                            imgD.src = cropped4
                        };
                        imgC.src = cropped3;
                    };
                    imgB.src = cropped2;
                };
                imgA.src = cropped1;
            }
        };

        img1.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 500);
            ctx.lineTo(500, 0);
            ctx.lineTo(0, 500);
            ctx.closePath();
            ctx.clip();

            ctx.drawImage(img1, 0, 0, 1000, 1000);
            cropped1 = canvas.toDataURL();
            tryCombine();
        };

        img2.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 500);
            ctx.lineTo(0, 500);
            ctx.closePath();
            ctx.clip();

            ctx.drawImage(img2, 0, 0, 1000, 1000);
            cropped2 = canvas.toDataURL();
            tryCombine();
        };
        img3.onload = () => {
            const canvas = document.createElement("canvas");
            const w = 1000, h = 1000;
            const x = 0, y = 0;

            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(500, 0);
            ctx.lineTo(500, 1000);
            ctx.lineTo(0, 500);
            ctx.closePath();
            ctx.clip();

            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(3 * (Math.PI / 2));
            ctx.drawImage(img3, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped3 = canvas.toDataURL();
            tryCombine();
        };

        img4.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(1000, 500);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img4, 0, 0, 1000, 1000);
            cropped4 = canvas.toDataURL();
            tryCombine();
        };
        img5.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(1000, 500);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img5, 0, 0, 1000, 1000);

            cropped5 = canvas.toDataURL();
            tryCombine();
        };

        bgImg.onload = () => {
            bgLoaded = true;
            tryCombine();
        };

        img1.onerror = reject;
        img2.onerror = reject;
        img3.onerror = reject;
        img4.onerror = reject;
        img5.onerror = reject;
        bgImg.onerror = reject;
    });
};
export { GenPaperA, GenPaperB, GenPaperD, GenPaperF };


