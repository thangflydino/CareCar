import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const Detail = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.textDetails}>Trung tâm chăm sóc ô tô Shinwapro luôn luôn cố gắng để trở thành nơi cung cấp hàng đầu các dịch vụ “Chăm sóc xe toàn diện” cho quý khách hàng, là garage có thương hiệu về tất cả các dịch vụ liên quan đến bảo trì, bảo dưỡng, sửa chữa ô tô.

        - Chúng tôi tin rằng nguồn nhân lực là một chìa khóa để xây dựng một mối quan hệ vững chắc với khách hàng của chúng tôi. Vì vậy, đội ngũ nhân viên của chúng tôi luôn luôn cải thiện bản thân không ngừng để đạt được 3 giá trị cốt lõi: thái độ chuyên tâm, kỹ năng kỹ thuật,phong cách chuyên nghiệp để cung cấp những giá trị tốt nhất có thể cho khách hàng trong bất kỳ trường hợp nào.

        - Quan tâm lớn nhất của người sử dụng ô tô là việc sửa chữa, bảo dưỡng “ xế yêu” của mình. Đứng trước nhu cầu lớn của khách hàng, tìm được một địa chỉ uy tín, đáng tin cậy giữa hàng trăm đại lí sửa chữa có mặt trong thành phố là nỗi băn khoăn hàng đầu của các chủ phương tiện ô tô.
        Hiểu được tâm lí sợ bị “hớ”, bị bắt chẹt, bị thay thế các phụ tùng đểu… Cùng với đó là tư duy dịch vụ hiện đại và chu đáo mà Trung tâm chăm sóc ô tô Shinwapro đã ra đời. Cho khách hàng có thêm một lựa chọn sáng suốt vào các dịch vụ cung ứng chuyên nghiệp cho các dòng xe từ thông dụng đến cao cấp trên thị trường.

        Tại sao bạn nên hoàn toàn tin tưởng sử dụng các dịch vụ “ Chăm sóc xe toàn diện” của chúng tôi?
        - Bằng niềm tin vững chắc, cùng với lòng nhiệt huyết của ban giám đốc và đội ngũ nhân viên, kỹ thuật viên chuyên nghiệp,lành nghề và năng động, tận tâm với công việc. Hệ thống kĩ thuật ổn định, hỗ trợ kĩ thuật 24/24 Garage ô tô Shinwa Pro đã có những bước đi vững chắc, đầy ấn tượng và đáng tự hào trên thị trường xe ô tô hiện nay.
        - Với sự chuyên nghiệp và sự tận tâm, kinh nghiệm nhiều năm trong lĩnh vực kinh doanh, sửa chữa ô tô. chúng tôi khẳng định chất lượng đảm bảo sẽ mang đến cho quý khách sự hài lòng, ô tô của quý khách được chăm sóc hoàn hảo toàn diện nhất.
        - Sử dụng dịch vụ sửa chữa, thay thế phụ tùng tại ô tô Shinwa Pro quý khách hàng sẽ yên tâm về chất lượng, xuất xứ, nguồn gốc cũng như hàng hóa sẽ được bảo hành đúng theo tiêu chuẩn như bất kì một garage chính hãng nào có mặt trên thị trường Việt Nam. Đặc biệt là trong các dịch vụ dầu máy, thay thế nội thất …Chất lượng được đảm bảo tuyệt đối.
        - Khách hàng sử dụng bất cứ 1 dịch vụ nào của chúng tôi đều nhận được sự quan tâm chu đáo, phục vụ tận tình, nhanh chóng và hiệu quả. Đồng hành cùng garage ô tô Shinwa Pro luôn có những chính sách ưu đãi hợp lí về giá cả, chăm sóc xe miễn phí hàng quý và hàng năm để tri ân tới khách hàng yêu quý.
        - Cùng với sự phát triển rất nhanh và mạnh của ngành ôtô hiện nay. Chúng tôi tự tin vào sự chuẩn bị kỹ lưỡng về nguồn lực của tổ chức cũng như xu thế phát triển của ngành, để với phương châm trở thành nơi “ chăm sóc xe toàn diện”, sự hài lòng của quý khách hàng cũng là niềm vui của chúng tôi. Garage ô tô Shinwa Pro cam kết bằng uy tín và chất lượng với trình độ tay nghề ngày một nâng cao, phát triển hơn trong thời gian tới.
        Trân trọng !
  </Text>
    </ScrollView>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    paddingHorizontal:10,
  },
  textDetails:{
    fontSize:16,
    color:'#000',
    marginVertical:10,
  }
})