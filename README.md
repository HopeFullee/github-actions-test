# Github Actions를 활용한 CI/CD 연습 레포

## 자동 테스팅

- ### Jest 유닛 테스트

  - 하위 작업 branch에서 main (master) PR 과정에서만 test 돌리기

- ### Husky

  - local 시점에서 commit 할때 테스트 돌리기 (클라 x 서버 크로스 체킹으로 서버 비용 절감)

- ### Lint-Staged

  > 깃 스테이징 영역에 있는 파일들(즉, `git add` 로 추가된 파일들)에만 린트와 포맷터를 실행하는 도구.
  >
  > 전체 코드베이스가 아닌, 커밋하려는 파일들만 검사하여 성능을 크게 향상.
  
  - husky pre-commit 파일에서 jest 테스트와 함께 lint 검사까지 같이 돌리기
