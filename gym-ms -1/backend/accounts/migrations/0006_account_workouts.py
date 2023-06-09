# Generated by Django 4.1 on 2023-06-05 20:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workout_tracker', '0003_alter_exercise_image_accountworkout'),
        ('accounts', '0005_alter_account_description_alter_account_email_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='workouts',
            field=models.ManyToManyField(related_name='accounts', through='workout_tracker.AccountWorkout', to='workout_tracker.workout'),
        ),
    ]
