class CreateStories < ActiveRecord::Migration[6.1]
  def change
    create_table :stories do |t|
      t.string :title
      t.string :type
      t.integer :user_id

      t.timestamps
    end
  end
end
