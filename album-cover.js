let canvas = document.querySelector('#album-cover-canvas');

/** @type {CanvasRenderingContext2d} */
let ctx = canvas.getContext("2d");

let color1 = "#DEEAFF"
let color2 = "#6E8FA5"
let color3 = "#2F3542"


    //    // Define the grid properties
    //    var gridSpacing = 50; // Spacing between grid lines
    //    var canvasWidth = canvas.width;
    //    var canvasHeight = canvas.height;

    //    // Set the stroke style (line color) and line width
    //    ctx.strokeStyle = "rgba(0, 0, 0, 0.5)"; // 50% opacity black
    //    ctx.lineWidth = 1; // 1 pixel line width

    //    // Draw vertical grid lines
    //    for (var x = 0; x <= canvasWidth; x += gridSpacing) {
    //        ctx.beginPath();
    //        ctx.moveTo(x, 0);
    //        ctx.lineTo(x, canvasHeight);
    //        ctx.stroke();
    //    }

    //    // Draw horizontal grid lines
    //    for (var y = 0; y <= canvasHeight; y += gridSpacing) {
    //        ctx.beginPath();
    //        ctx.moveTo(0, y);
    //        ctx.lineTo(canvasWidth, y);
    //        ctx.stroke();
    //    }


//Helping functions

function drawLines(pointsArray) {
        for (let i = 0; i < pointsArray.length; i += 2) {
        const x = pointsArray[i];
        const y = pointsArray[i + 1];
        ctx.lineTo(x, y);
    }
}

const label = document.getElementById("clicked-coordinate-label");

document.addEventListener("mousemove", (e) => {
    const offsetX = 30; // Adjust this value for the desired distance from the right side
    const offsetY = 30; // Adjust this value for the desired distance from the top

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Position the label to follow the mouse by its right side
    label.style.left = (mouseX + offsetX) + "px";
    label.style.top = (mouseY - offsetY) + "px";

});

function copyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}






clickedPointLabelEl = document.getElementById('clicked-coordinate-label');

function refreshCoordinate(e){
    clickedPointX = e.layerX - 9;
    clickedPointY = e.layerY - 80;
    clickedPoint = clickedPointX + "," + clickedPointY;
    clickedPointLabelEl.innerHTML = clickedPoint;
    copyToClipboard(clickedPoint);
}

canvas.addEventListener('click', refreshCoordinate);


       ctx.beginPath();
       ctx.moveTo(845,781);
       ctx.lineTo(814,785);
       ctx.lineTo(830,797);
       ctx.lineTo(728,755);

       ctx.bezierCurveTo(728,755,734,770,809,821);
       ctx.bezierCurveTo(802,821,775,814,685,761);
       ctx.bezierCurveTo(735,814,748,814,793,870);

       ctx.lineTo(755,845);
       ctx.lineTo(785,879);
       ctx.lineTo(744,862);
       ctx.lineTo(752,883);
       ctx.lineTo(731,878);
       ctx.lineTo(731,890);
       ctx.lineTo(669,829);
       ctx.lineTo(669,865);
       ctx.lineTo(653,875);
       ctx.lineTo(625,823);

       ctx.lineTo(640,890);
       ctx.lineTo(599,790);
       ctx.lineTo(590,805);
       ctx.lineTo(607,868);

       ctx.bezierCurveTo(590,857,590,850,578,819);

       ctx.lineTo(573,837);
       ctx.lineTo(565,835);
       ctx.lineTo(567,815);
       
       ctx.lineTo(549,836);
       ctx.lineTo(528,815);
       ctx.lineTo(520,744);

       ctx.lineTo(485,652);

       ctx.lineTo(470,642);
       ctx.lineTo(454,632);
       ctx.lineTo(484,629);

       ctx.lineTo(571,636);
       ctx.lineTo(643,692);
       ctx.lineTo(655,705);
       ctx.lineTo(653,718);
       ctx.lineTo(845,781);


       ctx.moveTo(417,688);
       ctx.bezierCurveTo(385,658,364,646,348,645);
       ctx.lineTo(317,653);
       ctx.lineTo(319,662);
       ctx.bezierCurveTo(301,650,305,626,315,622);
       ctx.bezierCurveTo(321,632,340,639,349,634);
       ctx.bezierCurveTo(359,635,362,625,380,632);
       drawLines([379,637,455,666,478,694,417,688]);

       ctx.moveTo(353,632);
       ctx.lineTo(336,626);
       ctx.bezierCurveTo(331,618,335,610,338,613);
       
       drawLines([367,605,381,604,362,621,356,620]);
       ctx.bezierCurveTo(357,623,350,620,353,632);



       ctx.moveTo(490,593);
       ctx.lineTo(427,577);
       ctx.lineTo(304,495);
       ctx.bezierCurveTo(267,492,238,479,230,468);
       ctx.lineTo(273,476);
       ctx.bezierCurveTo(258,470,235,459,227,451);
       ctx.lineTo(270,454);

       ctx.lineTo(241,444);
       ctx.bezierCurveTo(202,439,162,418,155,407);
       ctx.lineTo(250,425);
       ctx.lineTo(134,329);
       ctx.bezierCurveTo(130,323,136,315,131,309);
       drawLines([186,338,155,293,151,265,211,319]);
       ctx.bezierCurveTo(186,290,191,236,183,230);
       ctx.lineTo(234,302);
       ctx.bezierCurveTo(220,260,212,236,216,222);
       drawLines([294,341,321,318,346,377,371,380,387,361,404,383]);
       ctx.bezierCurveTo(412,376,431,385,436,390);
       drawLines([434,402,447,398,459,413,439,439,474,422]);
       ctx.bezierCurveTo(476,421,484,431,482,436);
       ctx.lineTo(503,438);
       ctx.bezierCurveTo(503,452,516,461,532,460);
       ctx.lineTo(531,476);
       ctx.bezierCurveTo(544,473,553,487,557,489);
       ctx.bezierCurveTo(555,492,563,498,572,502);
       ctx.lineTo(576,531);
       ctx.lineTo(490,593);



       ctx.moveTo(734,308);
       drawLines([757,233,767,298,741,354]);
       ctx.bezierCurveTo(791,309,790,263,798,214);
       ctx.bezierCurveTo(836,274,779,344,782,357);
       drawLines([816,348,845,292,863,229]);
       ctx.bezierCurveTo(876,280,857,332,827,362);
       ctx.bezierCurveTo(854,340,881,328,892,301);
       ctx.lineTo(911,263);
       ctx.bezierCurveTo(920,300,883,333,889,346);
       drawLines([867,392,888,396,943,396,915,419,907,436,909,447,871,459]);
       ctx.bezierCurveTo(876,460,877,469,874,473);
       drawLines([824,481,823,492,843,493,850,502,846,513,825,513,764,497,714,356,734,308]);
       ctx.closePath();
       
       
       ctx.fillStyle = color2;
       ctx.fill();

     
       ctx.beginPath();
       ctx.moveTo(548,836);
       
       ctx.lineTo(546,838);

       ctx.bezierCurveTo(544,841,543,841,545,850);
       ctx.bezierCurveTo(540,842,540,842,544,830);

       ctx.lineTo(540,830);

       ctx.bezierCurveTo(540,842,535,842,526,849);

       ctx.lineTo(534,837);
      
       ctx.bezierCurveTo(530,837,527,830,524,831);
       ctx.bezierCurveTo(519,843,520,845,512,849);
       ctx.bezierCurveTo(520,839,515,831,510,830);
       ctx.bezierCurveTo(509,834,512,839,516,842);
       ctx.bezierCurveTo(504,843,505,831,504,827);
       ctx.bezierCurveTo(500,823,505,817,505,814);

       ctx.bezierCurveTo(500,790,506,782,519,778);
       ctx.bezierCurveTo(520,720,455,735,416,689);

       drawLines([416,675,428,683,421,669,442,676,440,671,459,674,454,666,470,670,461,655,480,660,463,647,480,650,470,641,484,629,466,623,492,620,477,611,492,601,464,599,484,592]);
       
       ctx.bezierCurveTo(496,590,495,580,516,570);
       ctx.bezierCurveTo(547,552,550,541,566,522);
       ctx.bezierCurveTo(550,534,541,539,537,545);
       
       ctx.lineTo(509,542);
       
       ctx.bezierCurveTo(525,515,552,508,571,502);
       ctx.bezierCurveTo(578,503,578,505,580,511);
       ctx.bezierCurveTo(597,485,650,418,684,398);
       ctx.bezierCurveTo(702,368,702,368,734,309);

       ctx.lineTo(767,297);
       ctx.lineTo(742,354);
       
       drawLines([772,319,750,370,782,359]);

       ctx.bezierCurveTo(821,338,827,313,845,291);

       drawLines([854,325,814,380,831,397,891,338,933,287]);

       ctx.bezierCurveTo(926,350,900,340,889,362);

       drawLines([944,336,889,395,865,409,928,404,893,421,919,418,928,420,908,436,858,441,853,451,904,445,909,446,838,467,874,473,866,475,865,487,844,492,823,492,820,509,826,513,825,524,808,526,806,542,798,544,797,550,785,557,770,552,778,561]);

       ctx.bezierCurveTo(785,570,766,580,768,588);

       drawLines([757,587,752,599,745,599,746,615]);

       ctx.bezierCurveTo(732,612,710,622,703,633);

       ctx.lineTo(703,637);
       ctx.lineTo(688,641);
       ctx.lineTo(688,649);

       ctx.bezierCurveTo(673,654,657,672,655,683);

       drawLines([629,671,644,691]);

       ctx.bezierCurveTo(572,663,580,648,492,654);
       ctx.bezierCurveTo(508,670,563,708,604,703);
       ctx.bezierCurveTo(601,709,599,716,595,718);
       ctx.bezierCurveTo(604,732,627,749,651,746);
       ctx.bezierCurveTo(678,747,657,800,653,814);

       drawLines([634,806,623,816,608,805,613,831,595,805,578,800,580,787]);

       ctx.bezierCurveTo(583,778,579,763,574,763);

       drawLines([558,772,547,791,551,793,557,790,540,822,543,824,560,802]);

       ctx.bezierCurveTo(555,818,540,825,548,836);



       ctx.moveTo(559,848);
       ctx.lineTo(567,841);
       
       ctx.bezierCurveTo(560,831,570,819,567,815);
       ctx.bezierCurveTo(564,813,568,800,571,794);

       ctx.lineTo(570,820);

       ctx.bezierCurveTo(565,825,565,840,570,836);

       ctx.lineTo(570,830);

       ctx.bezierCurveTo(578,841,563,849,559,848);

       ctx.moveTo(433,579);
       ctx.bezierCurveTo(400,582,389,571,382,562);
       ctx.bezierCurveTo(361,545,311,497,282,481);
       ctx.bezierCurveTo(282,473,264,457,261,450);
       ctx.bezierCurveTo(246,447,228,436,224,436);
       ctx.bezierCurveTo(221,432,222,427,227,423);
       drawLines([311,469,272,431,336,470,433,579]);

       ctx.moveTo(328,434);
       ctx.bezierCurveTo(335,434,339,447,348,442);
       drawLines([353,464,332,450,328,434]);

       ctx.moveTo(375,444);
       ctx.bezierCurveTo(390,442,404,444,408,449);
       ctx.lineTo(392,454);
       ctx.bezierCurveTo(389,450,379,454,375,452);
       ctx.lineTo(375,444);
    
       ctx.moveTo(272,431);
       ctx.bezierCurveTo(242,393,224,374,204,368);
       ctx.bezierCurveTo(216,367,244,374,254,379);
       ctx.lineTo(249,369);
       ctx.bezierCurveTo(221,344,231,308,155,294);
       drawLines([186,338,132,310,132,312,160,339,159,340,133,329,196,380,136,354]);
       ctx.bezierCurveTo(144,378,180,387,219,420);
       ctx.lineTo(272,431);

       ctx.moveTo(337,613);
       ctx.bezierCurveTo(347,610,359,605,367,606);
       drawLines([368,615,361,621]);
       ctx.bezierCurveTo(374,613,355,602,354,617);
       ctx.bezierCurveTo(360,602,366,619,356,621);
       drawLines([355,617,337,613]);

       ctx.moveTo(322,624);
       ctx.bezierCurveTo(328,622,333,625,334,629);
       ctx.lineTo(322,624);
       
       ctx.moveTo(357,633);
       drawLines([339,635,334,638,357,633]);

       ctx.moveTo(334,638);
       ctx.bezierCurveTo(314,641,315,652,318,652);
       ctx.bezierCurveTo(338,644,362,647,374,654);
       ctx.bezierCurveTo(373,650,375,649,379,647);
       ctx.bezierCurveTo(364,644,346,644,343,640);
       ctx.bezierCurveTo(347,638,356,637,361,636);
       drawLines([343,639,340,645,324,644,334,638]);
       ctx.closePath();
       
          ctx.fillStyle = color3;
          ctx.fill();

        
       ctx.beginPath();
       ctx.moveTo(504,827);
       ctx.bezierCurveTo(502,825,504,814,505,814);
       ctx.bezierCurveTo(515,810,508,793,515,789);
       ctx.bezierCurveTo(528,785,526,811,522,821);
       ctx.bezierCurveTo(516,810,526,811,519,799);
       ctx.bezierCurveTo(515,807,519,818,512,824);
       ctx.lineTo(508,822);
       ctx.bezierCurveTo(510,825,505,827,504,827);
       ctx.moveTo(583,778);
       drawLines([601,732,612,738,583,778]);
       ctx.closePath();
       
       ctx.fillStyle = color2;
       ctx.fill();

    ctx.beginPath();
    ctx.moveTo(574,763);
    ctx.bezierCurveTo(577,768,582,765,581,786);
    ctx.bezierCurveTo(564,801,560,800,558,771);
    ctx.lineTo(574,763);
    ctx.closePath();

    ctx.fillStyle = color1;
    ctx.fill();



ctx.textAlign = "center"
ctx.font = "300 32px miller-display";
ctx.fillStyle = color3;
ctx.fillText("– THE –", 541, 140);

ctx.textAlign = "center"
ctx.font = "300 54px miller-display";
ctx.fillStyle = color3;
ctx.fillText("LOW POLY EAGLES", 541, 185);

ctx.textAlign = "center"
ctx.font = "bold 38px miller-display";
ctx.fillStyle = color3;
ctx.fillText("Feathered Fretwork", 541, 951);




       
        