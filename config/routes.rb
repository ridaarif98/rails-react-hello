# frozen_string_literal: true

Rails.application.routes.draw do
  get 'static/index'
  root 'static#index'
  scope '/api' do
    resources :greetings, only: [:index]
  end
  get '*page', to: 'statics#index', constraints: lambda { |req|
    !req.xhr? && req.format.html?
  }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
