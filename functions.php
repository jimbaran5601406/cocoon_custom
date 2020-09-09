<?php //子テーマ用関数
if ( !defined( 'ABSPATH' ) ) exit;

//子テーマ用のビジュアルエディタースタイルを適用
add_editor_style();

//以下に子テーマ用の関数を書く


//トップページから特定のカテゴリの除外
function exclude_category( $query ) {
  if ( $query->is_home() ) {
    $query->set( 'cat', '-27' );//マイナスをつけてカテゴリIDを除外する
  }
}
add_action( 'pre_get_posts', 'exclude_category' );