class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :status
      t.integer :group_id
      t.integer :tele_selection_id
      t.integer :food_bev_selection_id
      t.integer :dt_time_selection_id
      t.integer :location_selection_id

      t.timestamps
    end
  end
end
