import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Image } from 'react-native';
import { useMode } from './context';
import { useLanguage } from './LanguageContext';

export default function Data({ isDarkMode}) {
  const { language } = useLanguage();

  return (
    <View>
      <Image source={require('../photo/content.jpg')} />
      <View style={{ margin: 150, top: -100 }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16, color: isDarkMode ? '#fff' : '#000' }}>
        {language === 'th' ? (
            'ประวัติมหาวิทยาลัยเทคโนโลยีสุรนารี'
          ) : (
            "History of Suranaree University of Technology"
          )}
        </Text>
        <Text style={{ textAlign: 'left', top: 30, color: isDarkMode ? '#fff' : '#000' }}>
          {language === 'th' ? (
            'ช่วงแผนพัฒนาเศรษฐกิจและสังคมแห่งชาติ ฉบับที่ 5 รัฐบาลมี นโยบายกระจายโอกาสทางการศึกษา ระดับอุดมศึกษาไปสู่ภูมิภาคและ ชนบท ให้มากยิ่งขึ้น ดังนั้น ใน พ.ศ. 2523 ทบวงมหาวิทยาลัยจึง เสนอให้ รัฐบาลจัดตั้งมหาวิทยาลัยใหม่ในส่วนภูมิภาค 5 แห่ง ได้แก่ ภาคเหนือ 1 แห่ง ภาคใต้ 1 แห่ง ภาคตะวันออก 1 แห่ง และภาคตะวันออกเฉียงเหนือ 2 แห่ง ในส่วนภาคตะวันออกเฉียงเหนือ ให้จัดตั้ง วิทยาลัยในสังกัด มหาวิทยาลัยขอนแก่นขึ้นที่จังหวัดอุบลราชธานี และ จังหวัดนครราชสีมา โดยวิทยาลัยที่จัดตั้งขึ้นที่จังหวัดนครราชสีมา ให้ใช้ชื่อว่า “ วิทยาลัยสุรนารี ” และเลือกพื้นที่ป่าเสื่อมโทรม บริเวณ อ่างเก็บน้ำห้วยบ้านยาง อำเภอเมือง จังหวัดนครราชสีมา เนื้อที่ ประมาณ 7,000 ไร่ เป็นที่ตั้งต่อมารัฐบาลซึ่งมี ฯพณฯ พลเอก ชาติชาย ชุณหะวัณ เป็น นายกรัฐมนตรี ได้เล็งเห็นความจำเป็น ในการเร่งรัดจัดตั้งมหาวิทยาลัย เพิ่มขึ้นในส่วนภูมิภาค เพื่อให้มีศักยภาพ และความพร้อมที่จะสนองความ ต้องการของการ พัฒนาประเทศในภูมิภาคต่างๆ ดังนั้น คณะรัฐมนตรีใน คราวประชุม เมื่อวันที่ 13 กันยายน 2531 จึงมีมติให้ยกฐานะวิทยาลัย ในภูมิภาคทั้ง 5 แห่ง เป็นมหาวิทยาลัยเอกเทศ พร้อมกันนี้ ได้อนุมัติ ให้แต่งตั้งคณะกรรมการจัดตั้ง “มหาวิทยาลัยสุรนารี ” โดยมีปลัดทบวง มหาวิทยาลัย (ศาสตราจารย์ ดร . วิจิตร ศรีสอ้าน) เป็นประธานคณะกรรมการฯ ได้จัดทำโครงการ จัดตั้งมหาวิทยาลัยเทคโนโลยีสุรนารีเสนอต่อรัฐบาล พร้อมทั้งเสนอร่าง พระราชบัญญัติจัดตั้ง มหาวิทยาลัย ต่อสภาผู้แทนราษฎรในสมัยประชุม พ.ศ. 2532เมื่อวันที่ 27 กรกฎาคม 2533 พระบาทสมเด็จพระเจ้าอยู่หัวฯ ได้ทรงลงพระปรมาภิไธยใน พระราชบัญญัติดังกล่าว และได้ประกาศในราชกิจจานุเบกษา มีผลบังคับใช้ตั้งแต่วันที่ 30 กรกฎาคม 2533 มหาวิทยาลัยเทคโนโลยีสุรนารี  จึงได้ถือเอาวันที่ 27 กรกฎาคม 2533 เป็นวันสถาปนามหาวิทยาลัย'
          ) : (
            "During the 5th National Economic and Social Development Plan, the government has a policy to distribute educational opportunities. higher education to the region and the countryside even more. Therefore, in 1980, the University Affairs Office proposed that the government establish 5 new universities in the regions: 1 in the northern region, 1 in the south, 1 in the eastern region, and 2 in the northeastern region. In the northeastern region, affiliated colleges should be established. Khon Kaen University is based in Ubon Ratchathani and Nakhon Ratchasima provinces. by a college established in Nakhon Ratchasima Province To use the name 'Suranaree College' and choose a degraded forest area in the area of Huai Ban Yang Reservoir, Mueang District, Nakhon Ratchasima Province, with an area of approximately 7,000 rai, as the location.Later, the government with His Excellency General Chatchai Choonhavan as Prime Minister saw the necessity. in expediting the establishment of universities increased in the region to have potential and readiness to respond want of Develop countries in various regions. Therefore, the Cabinet at its meeting on September 13, 1988, resolved to elevate the college's status. In all 5 regions, they are independent universities. At the same time, approval was given to appoint a committee to establish “Suranaree University” with the Permanent Secretary of the University (Prof. Dr. Wijit Srisa-an) as the chairman of the committee. Has created a project Establishment of Suranaree University of Technology submitted to the government. along with presenting a draft University Establishment Act submitted to the House of Representatives in session in 1989.On July 27, 1990, His Majesty the King His Majesty has signed his name in Such Act and has been announced in the Royal Gazette Effective from July 30, 1990 Suranaree University of Technology Therefore, July 27, 1990 was considered as the university's founding day."
          )}
        </Text>
      </View>
    </View>
  );
}
