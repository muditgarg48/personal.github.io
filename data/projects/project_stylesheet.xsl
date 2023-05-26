<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <ul class="project_list" id="project_list">
			<xsl:for-each select="projects/project">
                <li id="personal_website">
                    <div class="time">
                        <span class="material-symbols-rounded">calendar_month</span>
                        <h4><xsl:value-of select="start"/> - <xsl:value-of select="end"/></h4>
                    </div>
                    <div class="title">
                        <a href="">
                            <h1><xsl:value-of select="name"/></h1>
                        </a>
                    </div>
                    <div class="desc">
                        <h4><xsl:value-of select="description"/></h4>
                    </div>
                    <span class="material-symbols-rounded">(handyman)</span>
                    <em>Technologies used:</em> 
                    <ul class="tech_used">
                        <xsl:for-each select="tech_used">
                            <li><xsl:value-of select="tech"/></li>
                        </xsl:for-each>
                    </ul>
                    <br/>
                    <span class="material-symbols-rounded">(groups)</span>
                    <em>People Involved:</em>
                    <ul class="ppl_used">
                        <xsl:for-each select="people">
                            <li><xsl:value-of select="person"/></li>
                        </xsl:for-each>
                    </ul>
                </li>
            </xsl:for-each>
		</ul>
    </xsl:template>
</xsl:stylesheet>