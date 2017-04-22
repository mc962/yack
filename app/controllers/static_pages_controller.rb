class StaticPagesController < ApplicationController
  def root
    @gen_channel ||= gen_channel
  end
end
