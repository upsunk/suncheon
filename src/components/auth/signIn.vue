<template>
  <v-card color="transparent" height="500" flat>
    <v-form
      v-model="valid"
      ref="form"
      lazy-validation>
      <v-card-title primary-title>
        <span class="title">로그인</span>
        <v-spacer></v-spacer>
        <span class="caption">
          또는&nbsp;<a href="#">회원가입</a>
        </span>
      </v-card-title>
      <v-card-actions>
        <v-btn
          color="primary"
          block>
          <v-icon left>mdi-google</v-icon>
          <v-divider vertical class="mx-3"></v-divider>
          Google 계정으로 로그인
        </v-btn>
      </v-card-actions>
      <v-container grid-list-md fluid>
        <v-layout row wrap>
          <v-flex xs5>
            <v-divider class="mt-2"></v-divider>
          </v-flex>
          <v-flex xs2 text-xs-center>
            또는
          </v-flex>
          <v-flex xs5>
            <v-divider class="mt-2"></v-divider>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-text>
        <v-text-field
          label="이메일"></v-text-field>
        <v-text-field
          label="비밀번호"></v-text-field>
      </v-card-text>
      <div class="recaptcha-terms-text px-3">
        이 페이지는 reCAPTCHA로 보호되며 Google 개인정보처리방침 및 서비스 약관의 적용을 받습니다.
      </div>
      <v-card-actions>
        <v-checkbox
          v-model="checkbox"
          label="로그인정보 저장"
        ></v-checkbox>
        <v-sapcer></v-sapcer>
        <v-btn
          color="primary"
          class="mr-2"
          small>로그인</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<style scoped>
.recaptcha-terms-text {
  font-size: 12px;
  font-weight: 200;
  color: #637282;
}
</style>
