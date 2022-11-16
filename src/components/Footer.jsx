import Logo from './images/Logo.svg';

function Footer() {
	const footerYear = new Date().getFullYear()

  	return (
		<footer id="FooterContainer" className="footerFrame">
			<div className="footer">
				<div class="logo">
                  <p className='footerLogo'><img src={Logo} alt="Logo" /></p>
                </div>
				<div className="navTabs">
					<p>
					Home <hr className='miniSize'/>About Us <hr className='miniSize'/>Contact Us <hr className='miniSize'/>
					</p>
				</div>

				<div className="buzServices1">
					<p>
					Construction <hr className='miniSize'/>Renovations <hr className='miniSize'/>Interior <hr className='miniSize'/>
					</p>
				</div>

				<div className="buzServices2">
					<p>
					Building Construction <hr className='miniSize'/>Home Renovations <hr className='miniSize'/>Exterior <hr className='miniSize'/>
					</p>
				</div>

				<div className="buzServices3">
					<p>
					Building <hr className='miniSize'/>Office Renovations <hr className='miniSize'/>Home Design <hr className='miniSize'/>
					</p>
				</div>

				{/* <p className="createdBy">Crafted by THGIVI</p>  */}
				<p className="conDetails">
					Address&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21st Iamdone Ave, 2090 <hr className='miniSize'/>
					Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SALES@mantsha.co.za <hr className='miniSize'/>
					Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+27 11 498 2700 <hr className='miniSize'/>
					&copy; Copyright website owner {footerYear}
				</p>
				<p className="copyright"> &nbsp; </p>	
  			</div>
		</footer>
	);
}
export default Footer;

