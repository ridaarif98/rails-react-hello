# frozen_string_literal: true

# Create greeting table
class CreateGreetings < ActiveRecord::Migration[6.1]
  def change
    create_table :greetings do |t|
      t.string :message

      t.timestamps
    end
  end
end
