{\rtf1\ansi\ansicpg936\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset134 PingFangSC-Regular;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function calculateResults() \{\
    let totalScore = 0;\
    let resultsText = "";\
    \
    // 
\f1 \'bb\'f1\'c8\'a1\'c3\'bf\'b8\'f6\'ce\'ca\'cc\'e2\'b5\'c4\'b4\'f0\'b0\'b8
\f0 \
    let answers = document.forms["scl90Form"];\
    for (let i = 0; i < answers.length; i++) \{\
        let answerValue = answers[i].value;\
        if (answerValue) \{\
            totalScore += parseInt(answerValue);\
        \}\
    \}\
\
    // 
\f1 \'cf\'d4\'ca\'be\'d7\'dc\'b7\'d6
\f0 \
    document.getElementById("totalScore").innerText = "
\f1 \'d7\'dc\'b7\'d6\'a3\'ba
\f0 " + totalScore;\
\
    // 
\f1 \'b8\'f9\'be\'dd\'d7\'dc\'b7\'d6\'b8\'f8\'b3\'f6\'bc\'f2\'b5\'a5\'d7\'dc\'bd\'e1\'a3\'a8\'d5\'e2\'c0\'ef\'c4\'e3\'bf\'c9\'d2\'d4\'b8\'f9\'be\'dd\'ca\'b5\'bc\'ca\'d0\'e8\'d2\'aa\'b8\'c4\'bd\'f8\'a3\'a9
\f0 \
    if (totalScore < 30) \{\
        resultsText = "
\f1 \'c4\'fa\'b5\'b1\'c7\'b0\'b5\'c4\'d0\'c4\'c0\'ed\'bd\'a1\'bf\'b5\'d7\'b4\'bf\'f6\'c1\'bc\'ba\'c3\'a1\'a3
\f0 ";\
    \} else if (totalScore >= 30 && totalScore < 60) \{\
        resultsText = "
\f1 \'c4\'fa\'b5\'c4\'d0\'c4\'c0\'ed\'bd\'a1\'bf\'b5\'d7\'b4\'bf\'f6\'d2\'bb\'b0\'e3\'a3\'ac\'bd\'a8\'d2\'e9\'b9\'d8\'d7\'a2\'a1\'a3
\f0 ";\
    \} else \{\
        resultsText = "
\f1 \'c4\'fa\'b5\'c4\'d0\'c4\'c0\'ed\'bd\'a1\'bf\'b5\'d7\'b4\'bf\'f6\'bd\'cf\'b2\'ee\'a3\'ac\'bd\'a8\'d2\'e9\'d7\'c9\'d1\'af\'d7\'a8\'d2\'b5\'d0\'c4\'c0\'ed\'d2\'bd\'c9\'fa\'a1\'a3
\f0 ";\
    \}\
\
    document.getElementById("summary").innerText = resultsText;\
\
    // 
\f1 \'cf\'d4\'ca\'be\'bd\'e1\'b9\'fb\'b2\'bf\'b7\'d6
\f0 \
    document.getElementById("results").style.display = "block";\
\}\
}