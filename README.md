# DB設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :messages
- has_many :groups, through: :users_groups
- has_many :users_groups

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|body|text||
|user|reference|null: false, foreign_key: true|
|group|reference|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string||
### Association
- has_many :users, through: :users_groups
- has_many :users_groups
- has_many :messages

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user|reference|null: false, foreign_key: true|
|group|reference|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user