<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
    <html>
        <head>
            <title>Project Report</title>
            <!-- <script src="../js/xml_extractor.js"></script> -->
            <link rel="stylesheet" type="text/css" href="../../stylesheets/projectstyle.css"/>
            <link rel="stylesheet" type="text/css" href="../../stylesheets/navbar.css"/>
            <link rel="stylesheet" type="text/css" href="../../stylesheets/background.css"/>
            <link rel="stylesheet" type="text/css" href="../../stylesheets/scrollbar.css"/>
            <link rel="stylesheet" type="text/css" href="../../stylesheets/inpagescroll.css"/>
            <link rel="stylesheet" type="text/css" href="../../stylesheets/indivprojectstyle.css"/>
            <script src="../../js/loading.js"></script>
            <link href="https://fonts.googleapis.com/css?family=Hammersmith+One|Spicy+Rice|Sen|Secular+One" rel="stylesheet"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </head>
        <body>
            
            <div class="loading" style="background-color: rgba(97, 145, 159, 0.8);height: 100vh; width: 100%; display:flex; flex-direction: column;">
                <div style="padding-left: 30%;">
                    <img src="../../assets/images/loading.gif"/>
                </div>
                <br/>
                <h1 class="loading_txt" style="text-align: center; font-family: 'Hammersmith One';">LOADING ... </h1>
            </div>
        
            <div class="upper">
                <ul class="nav">
                    <li class="top"><a href="../index.html">Home</a></li>
                    <li class="top"><a href="about.html">About</a></li>
                    <li class="top"><a href="my_certificates.html">Certificates</a></li>
                    <li class="top current"><a href="projects.html">Projects</a></li>
                    <li class="top"><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        
            <div class="myprojects" id="myprojects">
                <div class="txt">
                    <h1><a href="#project_list">PROJECT REPORT</a></h1>
                </div>
                <div class="motto">
                    <span id="quotes">“</span>Nothing you do is insignificant in life.<br/> It always prepares you for something in the future.
                </div>
                <br/>
            </div>
        
            <div class="project">
                <ul class="project_list" id="project_list">
                    <xsl:for-each select="projects/project">
                        <li id="personal_website">
                            <div class="time">
                                <span class="material-symbols-rounded">calendar_month</span>
                                <h4><xsl:value-of select="start"/> - <xsl:value-of select="end"/></h4>
                            </div>
                            <div class="title">
                                <a href="">
                                    <h1>
                                        <xsl:value-of select="name"/>
                                    </h1>
                                </a>
                            </div>
                            <div class="desc">
                                <h4><xsl:value-of select="description"/></h4>
                            </div>
                            <span class="material-symbols-rounded">(handyman)</span>
                            <em>Technologies used:</em> 
                            <ul class="tech_used">
                                <xsl:for-each select="tech_used">
                                    <li>
                                        <xsl:value-of select="tech"/>
                                    </li>
                                </xsl:for-each>
                            </ul>
                            <br/>
                            <span class="material-symbols-rounded">(groups)</span>
                            <em>People Involved:</em>
                            <ul class="ppl_used">
                                <xsl:for-each select="people">
                                    <li>
                                        <xsl:value-of select="person"/>
                                    </li>
                                </xsl:for-each>
                            </ul>
                        </li>
                    </xsl:for-each>
                </ul>
            </div>
        
            <div id="go_up">
                <a href="#myprojects"><img src="../../assets/images/up-arrow.png"/></a>
            </div>
        
            <div class="under_progress">
                <div class="clickable_txt">
                    <img src="../../assets/images/under-construction.png"/>   
                    <a href="under_construction.html">Always Learning</a>  
                    <img src="../../assets/images/under-construction.png"/>
                </div>
            </div>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>