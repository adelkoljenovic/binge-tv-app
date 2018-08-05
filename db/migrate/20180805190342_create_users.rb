class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.string :date_of_birth
      t.string :email_address
      t.string :password_digest
      t.string :leader

      t.timestamps
    end
  end
end
