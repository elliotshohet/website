from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import letter
from xml.sax.saxutils import escape
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
pdfmetrics.registerFont(TTFont('ResumeSans','/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('ResumeSans-Bold','/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))
pdfmetrics.registerFontFamily('ResumeSans', normal='ResumeSans', bold='ResumeSans-Bold', italic='ResumeSans', boldItalic='ResumeSans-Bold')
s=getSampleStyleSheet()
s.add(ParagraphStyle(name='NameX',fontName='ResumeSans-Bold',fontSize=20,leading=23,spaceAfter=4))
s.add(ParagraphStyle(name='TitleX',fontName='ResumeSans',fontSize=11,leading=14,spaceAfter=4))
s.add(ParagraphStyle(name='BodyX',fontName='ResumeSans',fontSize=8.5,leading=11.1,spaceAfter=4))
s.add(ParagraphStyle(name='SectionX',fontName='ResumeSans-Bold',fontSize=9.7,leading=13,spaceBefore=8,spaceAfter=4,textColor=colors.HexColor('#23354b')))
s.add(ParagraphStyle(name='BulletX',fontName='ResumeSans',fontSize=8.5,leading=11.1,leftIndent=9,firstLineIndent=-9,spaceAfter=3))
s.add(ParagraphStyle(name='SmallX',fontName='ResumeSans',fontSize=8.2,leading=11,spaceAfter=5))
s.add(ParagraphStyle(name='DateX',fontName='ResumeSans',fontSize=8.2,leading=11.1,alignment=TA_RIGHT,spaceAfter=0))
s.add(ParagraphStyle(name='RoleX',parent=s['BodyX'],spaceAfter=0))
def p(t,style='BodyX'): return Paragraph(t,s[style])
def role(company,title,date,bullets):
    header=Table([[p('<b>'+escape(company)+' | '+escape(title)+'</b>','RoleX'),p(date,'DateX')]],colWidths=[378,138],hAlign='LEFT')
    header.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0)]))
    return KeepTogether([header]+[p('&#8226; '+escape(b),'BulletX') for b in bullets]+[Spacer(1,3)])
flow=[p('ELLIOT SHOHET','NameX'),p('Senior Fullstack Engineer','TitleX'),p('Los Angeles, California | 818-445-2786 | elliot.shohet@gmail.com','SmallX'),p('elliotshohet.com | github.com/elliotshohet | linkedin.com/in/elliotshohet','SmallX'),p('PROFILE','SectionX'),p('Senior fullstack engineer and founding engineer building web, mobile, and desktop products from concept to launch. Owns interfaces, backend services, databases, cloud infrastructure, and AI integrations in startup environments.'),p('TECHNICAL SKILLS','SectionX'),p('<b>Languages:</b> TypeScript, JavaScript, SQL, Python, Solidity'),p('<b>Web, mobile and desktop:</b> React, Next.js, React Native, Expo, Electron, Tailwind CSS'),p('<b>Backend and data:</b> Node.js, PostgreSQL, Prisma, Supabase, Redis, REST APIs, WebSockets, Zod'),p('<b>AI:</b> OpenAI API, multimodal analysis, streaming chat, tool calling, MCP'),p('<b>Cloud and delivery:</b> Vercel, AWS (Lambda, EC2), Google Health APIs, Docker Compose, Expo EAS'),p('<b>Engineering:</b> System design, OAuth, store billing, image optimization (Sharp), regression testing, Git, Bun'),p('PROFESSIONAL EXPERIENCE','SectionX')]
flow += [role('Burn','Founding Engineer','Oct 2022 - Present',[
 'Built a React Native/Expo health app, Next.js dashboard, and PostgreSQL/Prisma backend in a shared TypeScript monorepo; added native Google sign-in bridges in Swift and Kotlin.',
'Built streaming AI chat with persistent history and data-management tools; added transactional leases, retry-safe action tracking, rate limits, and model usage/cost reporting.',
'Integrated Google Health and OAuth-protected MCP tools for ChatGPT, with scoped consent, encrypted tokens, concurrent metric fetching, and partial-failure handling.',
'Evolved RevenueCat billing into direct Apple/Google purchase verification. Optimized meal images with Sharp resizing/compression and upload limits; added Docker workflows and regression checks.' 
]),role("Nifty's",'Founding Engineer','May 2021 - Oct 2022',['Engineered contracts for 100,000+ NFT mints and automated deployment and verification across Ethereum and Palm, with staging and mainnet environments for repeatable releases.']),role('Hypernet Labs','Founding Engineer','Feb 2019 - Feb 2020',['Architected settlement infrastructure scaling ERC20 payments to 25 transactions/second. Built a modular SDK with dependency injection and CI/CD automation; managed a small engineering team.']),role('i2Chain, Inc','Founding Engineer','Sep 2018 - Feb 2019',['Built Electron/React/Redux desktop software, Node.js identity-based access control, a production geth node cluster, and AWS Lambda services.']),role('BlockchainForums.info','Blockchain Consultant','Sep 2017 - Sep 2018',['Built Solidity settlement contracts handling hundreds of millions in value.']),role('Ooma, Inc.','Software Engineering Intern','Jun 2017 - Sep 2017',['Containerized applications with Docker Swarm and profiled a million-line Java codebase.']),role('Weebly','Software Engineering Intern','Jun 2015 - Sep 2015',['Generated API clients in 13 languages and implemented REST endpoints and automated checks.']),role('ShrinkOnce Inc','Fullstack Software Engineer','Jul 2012 - Jul 2014',['Built a Laravel product and reduced bandwidth costs by 99.03% through software design.']),role('Greekdrop','CTO','Dec 2012 - May 2014',['Built an ecommerce portal and automated inventory management and accounting workflows.']),p('EDUCATION','SectionX'),Table([[p('<b>University of California, Davis</b> | B.S. Computer Science','RoleX'),p('2012 - 2017','DateX')]], colWidths=[378,138],hAlign='LEFT',style=TableStyle([('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0),('VALIGN',(0,0),(-1,-1),'TOP')]))]
SimpleDocTemplate(str(ROOT / 'public' / 'elliot-shohet-resume.pdf'),pagesize=letter,leftMargin=48,rightMargin=48,topMargin=34,bottomMargin=30,title='Elliot Shohet - Senior Fullstack Engineer',author='Elliot Shohet').build(flow)