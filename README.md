![image](https://github.com/Qfeed-Dev/qfeed-main-server/assets/82504981/d43fbadc-aa4b-4c1a-b878-bd6439f7d8f2)

### 프로젝트 소개

친구에 자신의 마음을 표현하고 싶지만, 주변 친구들과의 관계가 망가질까 주저하지 마세요.
익명을 통한 질문으로 서로에게 더 가까워지고 솔직하게 나를 드러낼 수 있는 큐피드를 보내보세요.

### 기능 소개

1. **Question Feed**
  내가 팔로우한 친구들이 올린 다양한 질문들을 자유롭게 둘러보세요.
  누가 투표했는지 알려주지 않는 익명성은 주저하지 않고 답할 수 있는 용기를 줘요.
2. **Official Q**
  다양하고 흥미로운 질문에 해당하는 친구를 선택해보세요.
  친구에게 한마디를 덧붙여 내 마음을 솔직하게 표현해보세요.
3. **Personal Q**
  내가 원하는 주제로 자유롭게 질문을 만들 수 있어요.
  궁금한 사항이 있다면 주저하지 말고 자유롭게 질문해 호기심을 해소해보세요.
4. **Message**
  나를 선택한 사람이 누구인지, 내 질문에 답한 사람이 누구인지 궁금하면 쪽지를 보내보세요.
  서로 쪽지를 주고받으며, 그 사람이 누구인지 추측할 수 있어요.
5. **Follow**
  QFEED를 사용하는 친구를 찾아 팔로우 하세요.
  상대방은 내가 팔로우했는지 전혀 알지 못해요.

### ERD 설계

![image](https://github.com/Qfeed-Dev/qfeed-main-server/assets/82504981/c4d0b948-6bf1-4b21-9d31-77fe71f90cc9)


### API 명세

- **Account**

    ![image](https://github.com/Qfeed-Dev/qfeed-main-server/assets/82504981/83e32b77-5c50-42df-8091-4ca55257c926)

    
- **File**
    
    ![image](https://github.com/Qfeed-Dev/qfeed-main-server/assets/82504981/579a17c0-450b-4985-b738-e277d99019d0)
    
- **Question**
    
    ![image](https://github.com/Qfeed-Dev/qfeed-main-server/assets/82504981/db9bcfa7-dfb4-46e8-9a19-6aa97a8d556f)
    
- **ChatRoom**
    
    ![image](https://github.com/Qfeed-Dev/qfeed-main-server/assets/82504981/59afa61d-f401-45b5-8e93-ec25dcf2bc82)
    

### 발생 문제 및 해결 과정

- Question feed fetcing 쿼리 이슈
- OfficialQ 와 PersonalQ 구조화 문제
- 빌드 과정에서 발생한 메모리 초과 - 모듈화 필요

### 프로젝트 성과

- AWS Elastic BeanStalk, RDS 를 통한 배포
- AWS Pipeline 을 통한 CD 구축
- AWS S3, Presigned Url 을 통한 파일 관리
- Nestjs 를 통한 서버 구축 - controllor, service, repository 패턴
- Swagger 문서화
- Discord Webhook 을 통한 배포 알림
