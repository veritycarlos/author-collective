class StoriesController < ApplicationController
    before_action :authorize  

    def index
        stories = current_user.stories
        render json: stories
    end 

    def create
        story = current_user.stories.create(story_params) # validations run when it's saved (methods that save: create, save, update)
        if story.valid?
            render json: story
        else 
            render json: { errors: story.errors.full_messages }, status: :unprocessable_entity  
        end 
    end 

    def show
        story = current_user.stories.find_by(id: params[:id])
        if story
            render json: story
        else 
            render json: { error: "Not Found" }, status: :unauthorized  
        end 
    end 

    # def destroy

    # end 

    # def update

    # end 

    private 

    def current_user
        User.find_by(id: session[:user_id])
    end 

    def story_params
        params.permit(:title, :type )
    end 

    def authorize
        return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id 
    end 
end