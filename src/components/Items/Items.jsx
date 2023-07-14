import styles from './Items.module.css';
import Container from '../Container/Container';
import lamp from '../../images/lamp.png';
import Clock from '../../images/clock.png';
import tableBl from '../../images/tableBl.png';
import woodClock from '../../images/woodClock.png';
import pillow from '../../images/pillow.png';
import stool from '../../images/table.png';
import woodTable from '../../images/woodTabel.png';


function Offer() {
    return (
        <Container>
            <h4 className={styles.Items__name}>Best Seller Items</h4>
            <section className={styles.Items__box}>
                <div className={styles.Box_cardLineOne}>
                    <div className={styles.Box_cardOne}>
                        <img className={styles.cardOne_img} src={lamp} alt="" />
                        <p className={styles.cardOne_title}>Metal Vintage Pendant</p>
                        <p className={styles.cardOne_description}>$79.00</p>
                    </div>
                    <div className={styles.Box_cardTwo}>
                        <img className={styles.cardTwo_img} src={Clock} alt="" />
                        <p className={styles.cardTwo_title}>Klosh Table Clock</p>
                        <p className={styles.cardTwo_description}>$99.00</p>
                    </div>
                    <div className={styles.Box_cardThree}>
                        <img className={styles.cardThree_img} src={tableBl} alt="" />
                        <p className={styles.cardThree_title}>Arne Dining Chair</p>
                        <p className={styles.cardThree_description}>$350.00</p>
                    </div>
                    <div className={styles.Box_cardFour}>
                        <img className={styles.cardFour_img} src={woodClock} alt="" />
                        <p className={styles.cardFour_title}>Klosh Wall Clock</p>
                        <p className={styles.cardFour_description}>$80.00 – $129.00</p>
                    </div>
                </div>
                <div className={styles.Box_cardLineTwo}>
                    <div className={styles.CardBox_One}>
                        <img className={styles.CardBox_One__imgOne} src={stool} alt="" />
                        <p className={styles.CardBox_One_TitleOne}>Modern Outdoor Chair</p>
                        <p className={styles.CardBox_One_DescriptionOne}>$79.00</p>
                    </div>
                    <div className={styles.CardBox_Two}>
                        <img className={styles.CardBox_Two__img} src={pillow} alt="" />
                        <p className={styles.CardBox_Two_Title}>Modern Outdoor Chair</p>
                        <p className={styles.CardBox_Two_Description}>$99.00</p>
                    </div>
                    <div className={styles.CardBox_Three}>
                        <img className={styles.CardBox_One__imgThree} src={woodTable} alt="" />
                        <p className={styles.CardBox_Three_Title}>Modern Outdoor Chair</p>
                        <p className={styles.CardBox_Three_Description}>$499.00</p>
                    </div>
                </div>
            </section>
        </Container>
    )
}
export default Offer;