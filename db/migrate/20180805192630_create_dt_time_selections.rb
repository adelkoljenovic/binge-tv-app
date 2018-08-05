class CreateDtTimeSelections < ActiveRecord::Migration[5.2]
  def change
    create_table :dt_time_selections do |t|
      t.string :date
      t.string :time
      t.integer :user_id

      t.timestamps
    end
  end
end
