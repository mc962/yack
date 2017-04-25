Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  mount ActionCable.server => '/cable'

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update]
  end

  namespace :api, default: {format: :json} do
    resource :session, only: [:create, :destroy]
  end

  namespace :api, default: {format: :json} do
    resources :chatrooms, only: [:index, :create, :show, :update, :destroy] do
      resources :messages, only: [:index, :show, :create, :update, :destroy]
    end
    # resources :messages, only: [:update, :destroy] ## not sure if this is routed properly
  end

  post '/api/chatrooms/join-channel/:id',  to: 'api/chatrooms#join_channel', defaults: {format: :json}

  delete '/api/chatrooms/leave-channel/:id', to: 'api/chatrooms#leave_channel', defaults: {format: :json}

  get '/api/chatrooms/channel-messages/:id', to: 'api/chatrooms#channel_messages', defaults: {format: :json}
end
