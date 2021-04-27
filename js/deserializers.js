var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4214 = root || request.c( 'UnityEngine.JointSpring' )
  var i4215 = data
  i4214.spring = i4215[0]
  i4214.damper = i4215[1]
  i4214.targetPosition = i4215[2]
  return i4214
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4216 = root || request.c( 'UnityEngine.JointMotor' )
  var i4217 = data
  i4216.m_TargetVelocity = i4217[0]
  i4216.m_Force = i4217[1]
  i4216.m_FreeSpin = i4217[2]
  return i4216
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4218 = root || request.c( 'UnityEngine.JointLimits' )
  var i4219 = data
  i4218.m_Min = i4219[0]
  i4218.m_Max = i4219[1]
  i4218.m_Bounciness = i4219[2]
  i4218.m_BounceMinVelocity = i4219[3]
  i4218.m_ContactDistance = i4219[4]
  i4218.minBounce = i4219[5]
  i4218.maxBounce = i4219[6]
  return i4218
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4220 = root || request.c( 'UnityEngine.JointDrive' )
  var i4221 = data
  i4220.m_PositionSpring = i4221[0]
  i4220.m_PositionDamper = i4221[1]
  i4220.m_MaximumForce = i4221[2]
  return i4220
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4222 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4223 = data
  i4222.m_Spring = i4223[0]
  i4222.m_Damper = i4223[1]
  return i4222
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4224 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4225 = data
  i4224.m_Limit = i4225[0]
  i4224.m_Bounciness = i4225[1]
  i4224.m_ContactDistance = i4225[2]
  return i4224
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4226 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4227 = data
  i4226.m_ExtremumSlip = i4227[0]
  i4226.m_ExtremumValue = i4227[1]
  i4226.m_AsymptoteSlip = i4227[2]
  i4226.m_AsymptoteValue = i4227[3]
  i4226.m_Stiffness = i4227[4]
  return i4226
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4228 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4229 = data
  i4228.m_LowerAngle = i4229[0]
  i4228.m_UpperAngle = i4229[1]
  return i4228
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4230 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4231 = data
  i4230.m_MotorSpeed = i4231[0]
  i4230.m_MaximumMotorTorque = i4231[1]
  return i4230
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4232 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4233 = data
  i4232.m_DampingRatio = i4233[0]
  i4232.m_Frequency = i4233[1]
  i4232.m_Angle = i4233[2]
  return i4232
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4234 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4235 = data
  i4234.m_LowerTranslation = i4235[0]
  i4234.m_UpperTranslation = i4235[1]
  return i4234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4236 = root || new pc.UnityMaterial()
  var i4237 = data
  i4236.name = i4237[0]
  request.r(i4237[1], i4237[2], 0, i4236, 'shader')
  i4236.renderQueue = i4237[3]
  i4236.enableInstancing = !!i4237[4]
  var i4239 = i4237[5]
  var i4238 = []
  for(var i = 0; i < i4239.length; i += 1) {
    i4238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4239[i + 0]) );
  }
  i4236.floatParameters = i4238
  var i4241 = i4237[6]
  var i4240 = []
  for(var i = 0; i < i4241.length; i += 1) {
    i4240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4241[i + 0]) );
  }
  i4236.colorParameters = i4240
  var i4243 = i4237[7]
  var i4242 = []
  for(var i = 0; i < i4243.length; i += 1) {
    i4242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4243[i + 0]) );
  }
  i4236.vectorParameters = i4242
  var i4245 = i4237[8]
  var i4244 = []
  for(var i = 0; i < i4245.length; i += 1) {
    i4244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4245[i + 0]) );
  }
  i4236.textureParameters = i4244
  var i4247 = i4237[9]
  var i4246 = []
  for(var i = 0; i < i4247.length; i += 1) {
    i4246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4247[i + 0]) );
  }
  i4236.materialFlags = i4246
  return i4236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4251 = data
  i4250.name = i4251[0]
  i4250.value = i4251[1]
  return i4250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4255 = data
  i4254.name = i4255[0]
  i4254.value = new pc.Color(i4255[1], i4255[2], i4255[3], i4255[4])
  return i4254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4259 = data
  i4258.name = i4259[0]
  i4258.value = new pc.Vec4( i4259[1], i4259[2], i4259[3], i4259[4] )
  return i4258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4263 = data
  i4262.name = i4263[0]
  request.r(i4263[1], i4263[2], 0, i4262, 'value')
  return i4262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4267 = data
  i4266.name = i4267[0]
  i4266.enabled = !!i4267[1]
  return i4266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4269 = data
  i4268.position = new pc.Vec3( i4269[0], i4269[1], i4269[2] )
  i4268.scale = new pc.Vec3( i4269[3], i4269[4], i4269[5] )
  i4268.rotation = new pc.Quat(i4269[6], i4269[7], i4269[8], i4269[9])
  return i4268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i4270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i4271 = data
  i4270.enabled = !!i4271[0]
  i4270.isTrigger = !!i4271[1]
  request.r(i4271[2], i4271[3], 0, i4270, 'material')
  i4270.center = new pc.Vec3( i4271[4], i4271[5], i4271[6] )
  i4270.radius = i4271[7]
  return i4270
}

Deserializers["UnselectedColliderDrawer"] = function (request, data, root) {
  var i4272 = root || request.c( 'UnselectedColliderDrawer' )
  var i4273 = data
  return i4272
}

Deserializers["WheatPieceDestroyer"] = function (request, data, root) {
  var i4274 = root || request.c( 'WheatPieceDestroyer' )
  var i4275 = data
  return i4274
}

Deserializers["WheatPieceRandomizer"] = function (request, data, root) {
  var i4276 = root || request.c( 'WheatPieceRandomizer' )
  var i4277 = data
  request.r(i4277[0], i4277[1], 0, i4276, 'partsParent')
  return i4276
}

Deserializers["DisableIfTooFar"] = function (request, data, root) {
  var i4278 = root || request.c( 'DisableIfTooFar' )
  var i4279 = data
  return i4278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i4280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i4281 = data
  request.r(i4281[0], i4281[1], 0, i4280, 'sharedMesh')
  return i4280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i4282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i4283 = data
  request.r(i4283[0], i4283[1], 0, i4282, 'additionalVertexStreams')
  i4282.enabled = !!i4283[2]
  request.r(i4283[3], i4283[4], 0, i4282, 'sharedMaterial')
  var i4285 = i4283[5]
  var i4284 = []
  for(var i = 0; i < i4285.length; i += 2) {
  request.r(i4285[i + 0], i4285[i + 1], 2, i4284, '')
  }
  i4282.sharedMaterials = i4284
  i4282.receiveShadows = !!i4283[6]
  i4282.shadowCastingMode = i4283[7]
  i4282.sortingLayerID = i4283[8]
  i4282.sortingOrder = i4283[9]
  i4282.lightmapIndex = i4283[10]
  i4282.lightmapSceneIndex = i4283[11]
  i4282.lightmapScaleOffset = new pc.Vec4( i4283[12], i4283[13], i4283[14], i4283[15] )
  i4282.lightProbeUsage = i4283[16]
  i4282.reflectionProbeUsage = i4283[17]
  return i4282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4289 = data
  i4288.name = i4289[0]
  i4288.tag = i4289[1]
  i4288.enabled = !!i4289[2]
  i4288.isStatic = !!i4289[3]
  i4288.layer = i4289[4]
  return i4288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4291 = data
  i4290.name = i4291[0]
  i4290.halfPrecision = !!i4291[1]
  i4290.vertexCount = i4291[2]
  i4290.aabb = i4291[3]
  var i4293 = i4291[4]
  var i4292 = []
  for(var i = 0; i < i4293.length; i += 1) {
    i4292.push( !!i4293[i + 0] );
  }
  i4290.streams = i4292
  i4290.vertices = i4291[5]
  var i4295 = i4291[6]
  var i4294 = []
  for(var i = 0; i < i4295.length; i += 1) {
    i4294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4295[i + 0]) );
  }
  i4290.subMeshes = i4294
  var i4297 = i4291[7]
  var i4296 = []
  for(var i = 0; i < i4297.length; i += 16) {
    i4296.push( new pc.Mat4().setData(i4297[i + 0], i4297[i + 1], i4297[i + 2], i4297[i + 3],  i4297[i + 4], i4297[i + 5], i4297[i + 6], i4297[i + 7],  i4297[i + 8], i4297[i + 9], i4297[i + 10], i4297[i + 11],  i4297[i + 12], i4297[i + 13], i4297[i + 14], i4297[i + 15]) );
  }
  i4290.bindposes = i4296
  var i4299 = i4291[8]
  var i4298 = []
  for(var i = 0; i < i4299.length; i += 1) {
    i4298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4299[i + 0]) );
  }
  i4290.blendShapes = i4298
  return i4290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4305 = data
  i4304.triangles = i4305[0]
  return i4304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4311 = data
  i4310.name = i4311[0]
  var i4313 = i4311[1]
  var i4312 = []
  for(var i = 0; i < i4313.length; i += 1) {
    i4312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4313[i + 0]) );
  }
  i4310.frames = i4312
  return i4310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4315 = data
  i4314.name = i4315[0]
  i4314.width = i4315[1]
  i4314.height = i4315[2]
  i4314.mipmapCount = i4315[3]
  i4314.anisoLevel = i4315[4]
  i4314.filterMode = i4315[5]
  i4314.hdr = !!i4315[6]
  i4314.format = i4315[7]
  i4314.wrapMode = i4315[8]
  i4314.alphaIsTransparency = !!i4315[9]
  i4314.alphaSource = i4315[10]
  return i4314
}

Deserializers["DamagingObstacle"] = function (request, data, root) {
  var i4316 = root || request.c( 'DamagingObstacle' )
  var i4317 = data
  request.r(i4317[0], i4317[1], 0, i4316, 'parts')
  i4316.m_damage = i4317[2]
  return i4316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4319 = data
  i4318.enabled = !!i4319[0]
  request.r(i4319[1], i4319[2], 0, i4318, 'sharedMaterial')
  var i4321 = i4319[3]
  var i4320 = []
  for(var i = 0; i < i4321.length; i += 2) {
  request.r(i4321[i + 0], i4321[i + 1], 2, i4320, '')
  }
  i4318.sharedMaterials = i4320
  i4318.receiveShadows = !!i4319[4]
  i4318.shadowCastingMode = i4319[5]
  i4318.sortingLayerID = i4319[6]
  i4318.sortingOrder = i4319[7]
  i4318.lightmapIndex = i4319[8]
  i4318.lightmapSceneIndex = i4319[9]
  i4318.lightmapScaleOffset = new pc.Vec4( i4319[10], i4319[11], i4319[12], i4319[13] )
  i4318.lightProbeUsage = i4319[14]
  i4318.reflectionProbeUsage = i4319[15]
  request.r(i4319[16], i4319[17], 0, i4318, 'mesh')
  i4318.meshCount = i4319[18]
  i4318.activeVertexStreamsCount = i4319[19]
  i4318.alignment = i4319[20]
  i4318.renderMode = i4319[21]
  i4318.sortMode = i4319[22]
  i4318.lengthScale = i4319[23]
  i4318.velocityScale = i4319[24]
  i4318.cameraVelocityScale = i4319[25]
  i4318.normalDirection = i4319[26]
  i4318.sortingFudge = i4319[27]
  i4318.minParticleSize = i4319[28]
  i4318.maxParticleSize = i4319[29]
  i4318.pivot = new pc.Vec3( i4319[30], i4319[31], i4319[32] )
  request.r(i4319[33], i4319[34], 0, i4318, 'trailMaterial')
  return i4318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4323 = data
  i4322.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4323[0], i4322.main)
  i4322.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4323[1], i4322.colorBySpeed)
  i4322.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4323[2], i4322.colorOverLifetime)
  i4322.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4323[3], i4322.emission)
  i4322.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4323[4], i4322.rotationBySpeed)
  i4322.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4323[5], i4322.rotationOverLifetime)
  i4322.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4323[6], i4322.shape)
  i4322.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4323[7], i4322.sizeBySpeed)
  i4322.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4323[8], i4322.sizeOverLifetime)
  i4322.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4323[9], i4322.textureSheetAnimation)
  i4322.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4323[10], i4322.velocityOverLifetime)
  i4322.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4323[11], i4322.noise)
  i4322.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4323[12], i4322.inheritVelocity)
  i4322.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4323[13], i4322.forceOverLifetime)
  i4322.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4323[14], i4322.limitVelocityOverLifetime)
  i4322.useAutoRandomSeed = !!i4323[15]
  i4322.randomSeed = i4323[16]
  return i4322
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4324 = root || new pc.ParticleSystemMain()
  var i4325 = data
  i4324.duration = i4325[0]
  i4324.loop = !!i4325[1]
  i4324.prewarm = !!i4325[2]
  i4324.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4325[3], i4324.startDelay)
  i4324.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4325[4], i4324.startLifetime)
  i4324.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4325[5], i4324.startSpeed)
  i4324.startSize3D = !!i4325[6]
  i4324.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4325[7], i4324.startSizeX)
  i4324.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4325[8], i4324.startSizeY)
  i4324.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4325[9], i4324.startSizeZ)
  i4324.startRotation3D = !!i4325[10]
  i4324.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4325[11], i4324.startRotationX)
  i4324.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4325[12], i4324.startRotationY)
  i4324.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4325[13], i4324.startRotationZ)
  i4324.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4325[14], i4324.startColor)
  i4324.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4325[15], i4324.gravityModifier)
  i4324.simulationSpace = i4325[16]
  request.r(i4325[17], i4325[18], 0, i4324, 'customSimulationSpace')
  i4324.simulationSpeed = i4325[19]
  i4324.useUnscaledTime = !!i4325[20]
  i4324.scalingMode = i4325[21]
  i4324.playOnAwake = !!i4325[22]
  i4324.maxParticles = i4325[23]
  i4324.emitterVelocityMode = i4325[24]
  return i4324
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4326 = root || new pc.MinMaxCurve()
  var i4327 = data
  i4326.mode = i4327[0]
  i4326.curveMin = new pc.AnimationCurve( { keys_flow: i4327[1] } )
  i4326.curveMax = new pc.AnimationCurve( { keys_flow: i4327[2] } )
  i4326.curveMultiplier = i4327[3]
  i4326.constantMin = i4327[4]
  i4326.constantMax = i4327[5]
  return i4326
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4328 = root || new pc.MinMaxGradient()
  var i4329 = data
  i4328.mode = i4329[0]
  i4328.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4329[1], i4328.gradientMin)
  i4328.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4329[2], i4328.gradientMax)
  i4328.colorMin = new pc.Color(i4329[3], i4329[4], i4329[5], i4329[6])
  i4328.colorMax = new pc.Color(i4329[7], i4329[8], i4329[9], i4329[10])
  return i4328
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4331 = data
  i4330.mode = i4331[0]
  var i4333 = i4331[1]
  var i4332 = []
  for(var i = 0; i < i4333.length; i += 1) {
    i4332.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4333[i + 0]) );
  }
  i4330.colorKeys = i4332
  var i4335 = i4331[2]
  var i4334 = []
  for(var i = 0; i < i4335.length; i += 1) {
    i4334.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4335[i + 0]) );
  }
  i4330.alphaKeys = i4334
  return i4330
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4336 = root || new pc.ParticleSystemColorBySpeed()
  var i4337 = data
  i4336.enabled = !!i4337[0]
  i4336.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4337[1], i4336.color)
  i4336.range = new pc.Vec2( i4337[2], i4337[3] )
  return i4336
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4341 = data
  i4340.color = new pc.Color(i4341[0], i4341[1], i4341[2], i4341[3])
  i4340.time = i4341[4]
  return i4340
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4345 = data
  i4344.alpha = i4345[0]
  i4344.time = i4345[1]
  return i4344
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4346 = root || new pc.ParticleSystemColorOverLifetime()
  var i4347 = data
  i4346.enabled = !!i4347[0]
  i4346.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4347[1], i4346.color)
  return i4346
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4348 = root || new pc.ParticleSystemEmitter()
  var i4349 = data
  i4348.enabled = !!i4349[0]
  i4348.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4349[1], i4348.rateOverTime)
  i4348.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4349[2], i4348.rateOverDistance)
  var i4351 = i4349[3]
  var i4350 = []
  for(var i = 0; i < i4351.length; i += 1) {
    i4350.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4351[i + 0]) );
  }
  i4348.bursts = i4350
  return i4348
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4354 = root || new pc.ParticleSystemBurst()
  var i4355 = data
  i4354.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4355[0], i4354.count)
  i4354.cycleCount = i4355[1]
  i4354.minCount = i4355[2]
  i4354.maxCount = i4355[3]
  i4354.repeatInterval = i4355[4]
  i4354.time = i4355[5]
  return i4354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4356 = root || new pc.ParticleSystemRotationBySpeed()
  var i4357 = data
  i4356.enabled = !!i4357[0]
  i4356.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4357[1], i4356.x)
  i4356.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4357[2], i4356.y)
  i4356.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4357[3], i4356.z)
  i4356.separateAxes = !!i4357[4]
  i4356.range = new pc.Vec2( i4357[5], i4357[6] )
  return i4356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4358 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4359 = data
  i4358.enabled = !!i4359[0]
  i4358.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4359[1], i4358.x)
  i4358.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4359[2], i4358.y)
  i4358.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4359[3], i4358.z)
  i4358.separateAxes = !!i4359[4]
  return i4358
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4360 = root || new pc.ParticleSystemShape()
  var i4361 = data
  i4360.enabled = !!i4361[0]
  i4360.shapeType = i4361[1]
  i4360.randomDirectionAmount = i4361[2]
  i4360.sphericalDirectionAmount = i4361[3]
  i4360.randomPositionAmount = i4361[4]
  i4360.alignToDirection = !!i4361[5]
  i4360.radius = i4361[6]
  i4360.radiusMode = i4361[7]
  i4360.radiusSpread = i4361[8]
  i4360.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4361[9], i4360.radiusSpeed)
  i4360.radiusThickness = i4361[10]
  i4360.angle = i4361[11]
  i4360.length = i4361[12]
  i4360.boxThickness = new pc.Vec3( i4361[13], i4361[14], i4361[15] )
  i4360.meshShapeType = i4361[16]
  request.r(i4361[17], i4361[18], 0, i4360, 'mesh')
  request.r(i4361[19], i4361[20], 0, i4360, 'meshRenderer')
  request.r(i4361[21], i4361[22], 0, i4360, 'skinnedMeshRenderer')
  i4360.useMeshMaterialIndex = !!i4361[23]
  i4360.meshMaterialIndex = i4361[24]
  i4360.useMeshColors = !!i4361[25]
  i4360.normalOffset = i4361[26]
  i4360.arc = i4361[27]
  i4360.arcMode = i4361[28]
  i4360.arcSpread = i4361[29]
  i4360.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4361[30], i4360.arcSpeed)
  i4360.donutRadius = i4361[31]
  i4360.position = new pc.Vec3( i4361[32], i4361[33], i4361[34] )
  i4360.rotation = new pc.Vec3( i4361[35], i4361[36], i4361[37] )
  i4360.scale = new pc.Vec3( i4361[38], i4361[39], i4361[40] )
  return i4360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4362 = root || new pc.ParticleSystemSizeBySpeed()
  var i4363 = data
  i4362.enabled = !!i4363[0]
  i4362.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4363[1], i4362.x)
  i4362.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4363[2], i4362.y)
  i4362.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4363[3], i4362.z)
  i4362.separateAxes = !!i4363[4]
  i4362.range = new pc.Vec2( i4363[5], i4363[6] )
  return i4362
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4364 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4365 = data
  i4364.enabled = !!i4365[0]
  i4364.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4365[1], i4364.x)
  i4364.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4365[2], i4364.y)
  i4364.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4365[3], i4364.z)
  i4364.separateAxes = !!i4365[4]
  return i4364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4366 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4367 = data
  i4366.enabled = !!i4367[0]
  i4366.mode = i4367[1]
  i4366.animation = i4367[2]
  i4366.numTilesX = i4367[3]
  i4366.numTilesY = i4367[4]
  i4366.useRandomRow = !!i4367[5]
  i4366.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4367[6], i4366.frameOverTime)
  i4366.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4367[7], i4366.startFrame)
  i4366.cycleCount = i4367[8]
  i4366.rowIndex = i4367[9]
  i4366.flipU = i4367[10]
  i4366.flipV = i4367[11]
  i4366.spriteCount = i4367[12]
  return i4366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4368 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4369 = data
  i4368.enabled = !!i4369[0]
  i4368.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4369[1], i4368.x)
  i4368.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4369[2], i4368.y)
  i4368.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4369[3], i4368.z)
  i4368.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4369[4], i4368.speedModifier)
  i4368.space = i4369[5]
  return i4368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4370 = root || new pc.ParticleSystemNoise()
  var i4371 = data
  i4370.enabled = !!i4371[0]
  i4370.separateAxes = !!i4371[1]
  i4370.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4371[2], i4370.strengthX)
  i4370.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4371[3], i4370.strengthY)
  i4370.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4371[4], i4370.strengthZ)
  i4370.frequency = i4371[5]
  i4370.damping = !!i4371[6]
  i4370.octaveCount = i4371[7]
  i4370.octaveMultiplier = i4371[8]
  i4370.octaveScale = i4371[9]
  i4370.quality = i4371[10]
  i4370.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4371[11], i4370.scrollSpeed)
  i4370.scrollSpeedMultiplier = i4371[12]
  i4370.remapEnabled = !!i4371[13]
  i4370.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4371[14], i4370.remapX)
  i4370.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4371[15], i4370.remapY)
  i4370.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4371[16], i4370.remapZ)
  i4370.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4371[17], i4370.positionAmount)
  i4370.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4371[18], i4370.rotationAmount)
  i4370.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4371[19], i4370.sizeAmount)
  return i4370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4372 = root || new pc.ParticleSystemInheritVelocity()
  var i4373 = data
  i4372.enabled = !!i4373[0]
  i4372.mode = i4373[1]
  i4372.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4373[2], i4372.curve)
  return i4372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4374 = root || new pc.ParticleSystemForceOverLifetime()
  var i4375 = data
  i4374.enabled = !!i4375[0]
  i4374.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4375[1], i4374.x)
  i4374.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4375[2], i4374.y)
  i4374.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4375[3], i4374.z)
  i4374.space = i4375[4]
  i4374.randomized = !!i4375[5]
  return i4374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4376 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4377 = data
  i4376.enabled = !!i4377[0]
  i4376.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4377[1], i4376.limitX)
  i4376.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4377[2], i4376.limitY)
  i4376.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4377[3], i4376.limitZ)
  i4376.dampen = i4377[4]
  i4376.separateAxes = !!i4377[5]
  i4376.space = i4377[6]
  i4376.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4377[7], i4376.drag)
  i4376.multiplyDragByParticleSize = !!i4377[8]
  i4376.multiplyDragByParticleVelocity = !!i4377[9]
  return i4376
}

Deserializers["LootableItem"] = function (request, data, root) {
  var i4378 = root || request.c( 'LootableItem' )
  var i4379 = data
  i4378.OnLootableItemCollected = request.d('LootableItemEvent', i4379[0], i4378.OnLootableItemCollected)
  request.r(i4379[1], i4379[2], 0, i4378, 'item')
  i4378.kind = i4379[3]
  return i4378
}

Deserializers["LootableItemEvent"] = function (request, data, root) {
  var i4380 = root || request.c( 'LootableItemEvent' )
  var i4381 = data
  i4380.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4381[0], i4380.m_PersistentCalls)
  return i4380
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4382 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4383 = data
  var i4385 = i4383[0]
  var i4384 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4385.length; i += 1) {
    i4384.add(request.d('UnityEngine.Events.PersistentCall', i4385[i + 0]));
  }
  i4382.m_Calls = i4384
  return i4382
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4388 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4389 = data
  request.r(i4389[0], i4389[1], 0, i4388, 'm_Target')
  i4388.m_MethodName = i4389[2]
  i4388.m_Mode = i4389[3]
  i4388.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4389[4], i4388.m_Arguments)
  i4388.m_CallState = i4389[5]
  return i4388
}

Deserializers["LightPole"] = function (request, data, root) {
  var i4390 = root || request.c( 'LightPole' )
  var i4391 = data
  return i4390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4393 = data
  i4392.pivot = new pc.Vec2( i4393[0], i4393[1] )
  i4392.anchorMin = new pc.Vec2( i4393[2], i4393[3] )
  i4392.anchorMax = new pc.Vec2( i4393[4], i4393[5] )
  i4392.sizeDelta = new pc.Vec2( i4393[6], i4393[7] )
  i4392.anchoredPosition3D = new pc.Vec3( i4393[8], i4393[9], i4393[10] )
  i4392.rotation = new pc.Quat(i4393[11], i4393[12], i4393[13], i4393[14])
  i4392.scale = new pc.Vec3( i4393[15], i4393[16], i4393[17] )
  return i4392
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i4394 = root || request.c( 'UnityEngine.UI.Slider' )
  var i4395 = data
  request.r(i4395[0], i4395[1], 0, i4394, 'm_FillRect')
  request.r(i4395[2], i4395[3], 0, i4394, 'm_HandleRect')
  i4394.m_Direction = i4395[4]
  i4394.m_MinValue = i4395[5]
  i4394.m_MaxValue = i4395[6]
  i4394.m_WholeNumbers = !!i4395[7]
  i4394.m_Value = i4395[8]
  i4394.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i4395[9], i4394.m_OnValueChanged)
  i4394.m_Navigation = request.d('UnityEngine.UI.Navigation', i4395[10], i4394.m_Navigation)
  i4394.m_Transition = i4395[11]
  i4394.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4395[12], i4394.m_Colors)
  i4394.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4395[13], i4394.m_SpriteState)
  i4394.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4395[14], i4394.m_AnimationTriggers)
  i4394.m_Interactable = !!i4395[15]
  request.r(i4395[16], i4395[17], 0, i4394, 'm_TargetGraphic')
  return i4394
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i4396 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i4397 = data
  i4396.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4397[0], i4396.m_PersistentCalls)
  return i4396
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4398 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4399 = data
  i4398.m_Mode = i4399[0]
  request.r(i4399[1], i4399[2], 0, i4398, 'm_SelectOnUp')
  request.r(i4399[3], i4399[4], 0, i4398, 'm_SelectOnDown')
  request.r(i4399[5], i4399[6], 0, i4398, 'm_SelectOnLeft')
  request.r(i4399[7], i4399[8], 0, i4398, 'm_SelectOnRight')
  return i4398
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4400 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4401 = data
  i4400.m_NormalColor = new pc.Color(i4401[0], i4401[1], i4401[2], i4401[3])
  i4400.m_HighlightedColor = new pc.Color(i4401[4], i4401[5], i4401[6], i4401[7])
  i4400.m_PressedColor = new pc.Color(i4401[8], i4401[9], i4401[10], i4401[11])
  i4400.m_SelectedColor = new pc.Color(i4401[12], i4401[13], i4401[14], i4401[15])
  i4400.m_DisabledColor = new pc.Color(i4401[16], i4401[17], i4401[18], i4401[19])
  i4400.m_ColorMultiplier = i4401[20]
  i4400.m_FadeDuration = i4401[21]
  return i4400
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4402 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4403 = data
  request.r(i4403[0], i4403[1], 0, i4402, 'm_HighlightedSprite')
  request.r(i4403[2], i4403[3], 0, i4402, 'm_PressedSprite')
  request.r(i4403[4], i4403[5], 0, i4402, 'm_SelectedSprite')
  request.r(i4403[6], i4403[7], 0, i4402, 'm_DisabledSprite')
  return i4402
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4404 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4405 = data
  i4404.m_NormalTrigger = i4405[0]
  i4404.m_HighlightedTrigger = i4405[1]
  i4404.m_PressedTrigger = i4405[2]
  i4404.m_SelectedTrigger = i4405[3]
  i4404.m_DisabledTrigger = i4405[4]
  return i4404
}

Deserializers["WheatSliderWidget"] = function (request, data, root) {
  var i4406 = root || request.c( 'WheatSliderWidget' )
  var i4407 = data
  request.r(i4407[0], i4407[1], 0, i4406, 'amountText')
  request.r(i4407[2], i4407[3], 0, i4406, 'BarIconImage')
  request.r(i4407[4], i4407[5], 0, i4406, 'WheatImage')
  request.r(i4407[6], i4407[7], 0, i4406, 'products')
  return i4406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4409 = data
  i4408.cullTransparentMesh = !!i4409[0]
  return i4408
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i4410 = root || request.c( 'UnityEngine.UI.Text' )
  var i4411 = data
  i4410.m_FontData = request.d('UnityEngine.UI.FontData', i4411[0], i4410.m_FontData)
  i4410.m_Text = i4411[1]
  request.r(i4411[2], i4411[3], 0, i4410, 'm_Material')
  i4410.m_Maskable = !!i4411[4]
  i4410.m_Color = new pc.Color(i4411[5], i4411[6], i4411[7], i4411[8])
  i4410.m_RaycastTarget = !!i4411[9]
  return i4410
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i4412 = root || request.c( 'UnityEngine.UI.FontData' )
  var i4413 = data
  request.r(i4413[0], i4413[1], 0, i4412, 'm_Font')
  i4412.m_FontSize = i4413[2]
  i4412.m_FontStyle = i4413[3]
  i4412.m_BestFit = !!i4413[4]
  i4412.m_MinSize = i4413[5]
  i4412.m_MaxSize = i4413[6]
  i4412.m_Alignment = i4413[7]
  i4412.m_AlignByGeometry = !!i4413[8]
  i4412.m_RichText = !!i4413[9]
  i4412.m_HorizontalOverflow = i4413[10]
  i4412.m_VerticalOverflow = i4413[11]
  i4412.m_LineSpacing = i4413[12]
  return i4412
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4414 = root || request.c( 'UnityEngine.UI.Image' )
  var i4415 = data
  request.r(i4415[0], i4415[1], 0, i4414, 'm_Sprite')
  i4414.m_Type = i4415[2]
  i4414.m_PreserveAspect = !!i4415[3]
  i4414.m_FillCenter = !!i4415[4]
  i4414.m_FillMethod = i4415[5]
  i4414.m_FillAmount = i4415[6]
  i4414.m_FillClockwise = !!i4415[7]
  i4414.m_FillOrigin = i4415[8]
  i4414.m_UseSpriteMesh = !!i4415[9]
  i4414.m_PixelsPerUnitMultiplier = i4415[10]
  request.r(i4415[11], i4415[12], 0, i4414, 'm_Material')
  i4414.m_Maskable = !!i4415[13]
  i4414.m_Color = new pc.Color(i4415[14], i4415[15], i4415[16], i4415[17])
  i4414.m_RaycastTarget = !!i4415[18]
  return i4414
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i4416 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i4417 = data
  i4416.m_IgnoreLayout = !!i4417[0]
  i4416.m_MinWidth = i4417[1]
  i4416.m_MinHeight = i4417[2]
  i4416.m_PreferredWidth = i4417[3]
  i4416.m_PreferredHeight = i4417[4]
  i4416.m_FlexibleWidth = i4417[5]
  i4416.m_FlexibleHeight = i4417[6]
  i4416.m_LayoutPriority = i4417[7]
  return i4416
}

Deserializers["HealthBar"] = function (request, data, root) {
  var i4418 = root || request.c( 'HealthBar' )
  var i4419 = data
  request.r(i4419[0], i4419[1], 0, i4418, 'HealthProvider')
  request.r(i4419[2], i4419[3], 0, i4418, 'progressImage')
  request.r(i4419[4], i4419[5], 0, i4418, 'BarIconImage')
  return i4418
}

Deserializers["ShieldBar"] = function (request, data, root) {
  var i4420 = root || request.c( 'ShieldBar' )
  var i4421 = data
  request.r(i4421[0], i4421[1], 0, i4420, 'progressImage')
  request.r(i4421[2], i4421[3], 0, i4420, 'barIconImage')
  request.r(i4421[4], i4421[5], 0, i4420, 'root')
  return i4420
}

Deserializers["UIActiveBoost"] = function (request, data, root) {
  var i4422 = root || request.c( 'UIActiveBoost' )
  var i4423 = data
  request.r(i4423[0], i4423[1], 0, i4422, 'imgIcon')
  request.r(i4423[2], i4423[3], 0, i4422, 'timerImg')
  var i4425 = i4423[4]
  var i4424 = []
  for(var i = 0; i < i4425.length; i += 1) {
    i4424.push( request.d('UIActiveBoost+SpriteByKind', i4425[i + 0]) );
  }
  i4422.sprites = i4424
  i4422.Kind = i4423[5]
  return i4422
}

Deserializers["UIActiveBoost+SpriteByKind"] = function (request, data, root) {
  var i4428 = root || request.c( 'UIActiveBoost+SpriteByKind' )
  var i4429 = data
  i4428.Kind = i4429[0]
  request.r(i4429[1], i4429[2], 0, i4428, 'Sprite')
  return i4428
}

Deserializers["ShootButtonCtrl"] = function (request, data, root) {
  var i4430 = root || request.c( 'ShootButtonCtrl' )
  var i4431 = data
  request.r(i4431[0], i4431[1], 0, i4430, 'txtAmount')
  request.r(i4431[2], i4431[3], 0, i4430, 'timerImg')
  request.r(i4431[4], i4431[5], 0, i4430, 'products')
  return i4430
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4432 = root || request.c( 'UnityEngine.UI.Button' )
  var i4433 = data
  i4432.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4433[0], i4432.m_OnClick)
  i4432.m_Navigation = request.d('UnityEngine.UI.Navigation', i4433[1], i4432.m_Navigation)
  i4432.m_Transition = i4433[2]
  i4432.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4433[3], i4432.m_Colors)
  i4432.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4433[4], i4432.m_SpriteState)
  i4432.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4433[5], i4432.m_AnimationTriggers)
  i4432.m_Interactable = !!i4433[6]
  request.r(i4433[7], i4433[8], 0, i4432, 'm_TargetGraphic')
  return i4432
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4434 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4435 = data
  i4434.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4435[0], i4434.m_PersistentCalls)
  return i4434
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4436 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4437 = data
  request.r(i4437[0], i4437[1], 0, i4436, 'm_ObjectArgument')
  i4436.m_ObjectArgumentAssemblyTypeName = i4437[2]
  i4436.m_IntArgument = i4437[3]
  i4436.m_FloatArgument = i4437[4]
  i4436.m_StringArgument = i4437[5]
  i4436.m_BoolArgument = !!i4437[6]
  return i4436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i4438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i4439 = data
  i4438.mass = i4439[0]
  i4438.drag = i4439[1]
  i4438.angularDrag = i4439[2]
  i4438.useGravity = !!i4439[3]
  i4438.isKinematic = !!i4439[4]
  i4438.constraints = i4439[5]
  i4438.maxAngularVelocity = i4439[6]
  i4438.collisionDetectionMode = i4439[7]
  i4438.interpolation = i4439[8]
  return i4438
}

Deserializers["CarController"] = function (request, data, root) {
  var i4440 = root || request.c( 'CarController' )
  var i4441 = data
  var i4443 = i4441[0]
  var i4442 = []
  for(var i = 0; i < i4443.length; i += 2) {
  request.r(i4443[i + 0], i4443[i + 1], 2, i4442, '')
  }
  i4440.m_WheelColliders = i4442
  i4440.TorqueMultiplier = i4441[1]
  i4440.m_CarDriveType = i4441[2]
  var i4445 = i4441[3]
  var i4444 = []
  for(var i = 0; i < i4445.length; i += 2) {
  request.r(i4445[i + 0], i4445[i + 1], 2, i4444, '')
  }
  i4440.m_WheelMeshes = i4444
  var i4447 = i4441[4]
  var i4446 = []
  for(var i = 0; i < i4447.length; i += 2) {
  request.r(i4447[i + 0], i4447[i + 1], 2, i4446, '')
  }
  i4440.m_WheelEffects = i4446
  i4440.m_CentreOfMassOffset = new pc.Vec3( i4441[5], i4441[6], i4441[7] )
  i4440.m_MaximumSteerAngle = i4441[8]
  i4440.m_SteerHelper = i4441[9]
  i4440.m_TractionControl = i4441[10]
  i4440.m_FullTorqueOverAllWheels = i4441[11]
  i4440.m_ReverseTorque = i4441[12]
  i4440.m_MaxHandbrakeTorque = i4441[13]
  i4440.m_Downforce = i4441[14]
  i4440.m_SpeedType = i4441[15]
  i4440.m_Topspeed = i4441[16]
  i4440.m_RevRangeBoundary = i4441[17]
  i4440.m_SlipLimit = i4441[18]
  i4440.m_BrakeTorque = i4441[19]
  i4440.m_GearNum = i4441[20]
  request.r(i4441[21], i4441[22], 0, i4440, 'm_Rigidbody')
  return i4440
}

Deserializers["CarUserControl"] = function (request, data, root) {
  var i4454 = root || request.c( 'CarUserControl' )
  var i4455 = data
  i4454.CanMove = !!i4455[0]
  request.r(i4455[1], i4455[2], 0, i4454, 'pathCreator')
  request.r(i4455[3], i4455[4], 0, i4454, 'playerCarrot')
  request.r(i4455[5], i4455[6], 0, i4454, 'farPointInDirectionOfView')
  request.r(i4455[7], i4455[8], 0, i4454, 'ghostWriter')
  request.r(i4455[9], i4455[10], 0, i4454, 'carBody')
  request.r(i4455[11], i4455[12], 0, i4454, 'collisionParticlesLeft')
  request.r(i4455[13], i4455[14], 0, i4454, 'collisionParticlesRight')
  return i4454
}

Deserializers["UnityStandardAssets.Vehicles.Car.CarAudio"] = function (request, data, root) {
  var i4456 = root || request.c( 'UnityStandardAssets.Vehicles.Car.CarAudio' )
  var i4457 = data
  i4456.engineSoundStyle = i4457[0]
  request.r(i4457[1], i4457[2], 0, i4456, 'lowAccelClip')
  request.r(i4457[3], i4457[4], 0, i4456, 'lowDecelClip')
  request.r(i4457[5], i4457[6], 0, i4456, 'highAccelClip')
  request.r(i4457[7], i4457[8], 0, i4456, 'highDecelClip')
  i4456.pitchMultiplier = i4457[9]
  i4456.lowPitchMin = i4457[10]
  i4456.lowPitchMax = i4457[11]
  i4456.highPitchMultiplier = i4457[12]
  i4456.maxRolloffDistance = i4457[13]
  i4456.dopplerLevel = i4457[14]
  return i4456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i4458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i4459 = data
  i4458.center = new pc.Vec3( i4459[0], i4459[1], i4459[2] )
  i4458.size = new pc.Vec3( i4459[3], i4459[4], i4459[5] )
  i4458.enabled = !!i4459[6]
  i4458.isTrigger = !!i4459[7]
  request.r(i4459[8], i4459[9], 0, i4458, 'material')
  return i4458
}

Deserializers["RaceCar"] = function (request, data, root) {
  var i4460 = root || request.c( 'RaceCar' )
  var i4461 = data
  i4460.Owner = i4461[0]
  i4460.Score = i4461[1]
  request.r(i4461[2], i4461[3], 0, i4460, 'boosts')
  request.r(i4461[4], i4461[5], 0, i4460, 'products')
  request.r(i4461[6], i4461[7], 0, i4460, 'boostsEffectPosition')
  request.r(i4461[8], i4461[9], 0, i4460, 'effectSheildPrefab')
  request.r(i4461[10], i4461[11], 0, i4460, 'effectDoublePrefab')
  return i4460
}

Deserializers["HealthController"] = function (request, data, root) {
  var i4462 = root || request.c( 'HealthController' )
  var i4463 = data
  i4462.Health = i4463[0]
  i4462.MaxHealth = i4463[1]
  i4462.Shield = i4463[2]
  i4462.MaxShield = i4463[3]
  request.r(i4463[4], i4463[5], 0, i4462, 'MainScreen')
  request.r(i4463[6], i4463[7], 0, i4462, 'LossScreen')
  request.r(i4463[8], i4463[9], 0, i4462, 'boosts')
  return i4462
}

Deserializers["Gun"] = function (request, data, root) {
  var i4464 = root || request.c( 'Gun' )
  var i4465 = data
  request.r(i4465[0], i4465[1], 0, i4464, 'rocketPrefab')
  request.r(i4465[2], i4465[3], 0, i4464, 'carUserControl')
  request.r(i4465[4], i4465[5], 0, i4464, 'products')
  return i4464
}

Deserializers["JustWheelMeshes"] = function (request, data, root) {
  var i4466 = root || request.c( 'JustWheelMeshes' )
  var i4467 = data
  var i4469 = i4467[0]
  var i4468 = []
  for(var i = 0; i < i4469.length; i += 2) {
  request.r(i4469[i + 0], i4469[i + 1], 2, i4468, '')
  }
  i4466.m_WheelMeshes = i4468
  return i4466
}

Deserializers["BlobShadowMovement"] = function (request, data, root) {
  var i4470 = root || request.c( 'BlobShadowMovement' )
  var i4471 = data
  request.r(i4471[0], i4471[1], 0, i4470, 'Target')
  i4470.Offset = new pc.Vec3( i4471[2], i4471[3], i4471[4] )
  return i4470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4473 = data
  request.r(i4473[0], i4473[1], 0, i4472, 'clip')
  i4472.playOnAwake = !!i4473[2]
  i4472.loop = !!i4473[3]
  i4472.enabled = !!i4473[4]
  return i4472
}

Deserializers["WheelEffects"] = function (request, data, root) {
  var i4474 = root || request.c( 'WheelEffects' )
  var i4475 = data
  request.r(i4475[0], i4475[1], 0, i4474, 'SkidTrailPrefab')
  request.r(i4475[2], i4475[3], 0, i4474, 'skidParticles')
  return i4474
}

Deserializers["Rocket"] = function (request, data, root) {
  var i4476 = root || request.c( 'Rocket' )
  var i4477 = data
  request.r(i4477[0], i4477[1], 0, i4476, 'jetStream')
  request.r(i4477[2], i4477[3], 0, i4476, 'explosionPrefab')
  return i4476
}

Deserializers["Explosion"] = function (request, data, root) {
  var i4478 = root || request.c( 'Explosion' )
  var i4479 = data
  request.r(i4479[0], i4479[1], 0, i4478, 'explosionParticleSystem')
  return i4478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4481 = data
  request.r(i4481[0], i4481[1], 0, i4480, 'animatorController')
  i4480.updateMode = i4481[2]
  var i4483 = i4481[3]
  var i4482 = []
  for(var i = 0; i < i4483.length; i += 2) {
  request.r(i4483[i + 0], i4483[i + 1], 2, i4482, '')
  }
  i4480.humanBones = i4482
  i4480.enabled = !!i4481[4]
  return i4480
}

Deserializers["DriverDescription"] = function (request, data, root) {
  var i4486 = root || request.c( 'DriverDescription' )
  var i4487 = data
  var i4489 = i4487[0]
  var i4488 = []
  for(var i = 0; i < i4489.length; i += 2) {
  request.r(i4489[i + 0], i4489[i + 1], 2, i4488, '')
  }
  i4486.driverPrefab = i4488
  return i4486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i4490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i4491 = data
  i4490.enabled = !!i4491[0]
  request.r(i4491[1], i4491[2], 0, i4490, 'sharedMaterial')
  var i4493 = i4491[3]
  var i4492 = []
  for(var i = 0; i < i4493.length; i += 2) {
  request.r(i4493[i + 0], i4493[i + 1], 2, i4492, '')
  }
  i4490.sharedMaterials = i4492
  i4490.receiveShadows = !!i4491[4]
  i4490.shadowCastingMode = i4491[5]
  i4490.sortingLayerID = i4491[6]
  i4490.sortingOrder = i4491[7]
  i4490.lightmapIndex = i4491[8]
  i4490.lightmapSceneIndex = i4491[9]
  i4490.lightmapScaleOffset = new pc.Vec4( i4491[10], i4491[11], i4491[12], i4491[13] )
  i4490.lightProbeUsage = i4491[14]
  i4490.reflectionProbeUsage = i4491[15]
  request.r(i4491[16], i4491[17], 0, i4490, 'sharedMesh')
  var i4495 = i4491[18]
  var i4494 = []
  for(var i = 0; i < i4495.length; i += 2) {
  request.r(i4495[i + 0], i4495[i + 1], 2, i4494, '')
  }
  i4490.bones = i4494
  i4490.updateWhenOffscreen = !!i4491[19]
  i4490.localBounds = i4491[20]
  request.r(i4491[21], i4491[22], 0, i4490, 'rootBone')
  var i4497 = i4491[23]
  var i4496 = []
  for(var i = 0; i < i4497.length; i += 1) {
    i4496.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i4497[i + 0]) );
  }
  i4490.blendShapesWeights = i4496
  return i4490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i4500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i4501 = data
  i4500.weight = i4501[0]
  return i4500
}

Deserializers["TrackHandles"] = function (request, data, root) {
  var i4502 = root || request.c( 'TrackHandles' )
  var i4503 = data
  request.r(i4503[0], i4503[1], 0, i4502, 'MainPath')
  i4502.OnFinishReached = request.d('UnityEngine.Events.UnityEvent', i4503[2], i4502.OnFinishReached)
  request.r(i4503[3], i4503[4], 0, i4502, 'Root')
  return i4502
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i4504 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i4505 = data
  i4504.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4505[0], i4504.m_PersistentCalls)
  return i4504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i4506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i4507 = data
  i4506.enabled = !!i4507[0]
  i4506.isTrigger = !!i4507[1]
  request.r(i4507[2], i4507[3], 0, i4506, 'material')
  request.r(i4507[4], i4507[5], 0, i4506, 'sharedMesh')
  i4506.convex = !!i4507[6]
  return i4506
}

Deserializers["FinishTrigger"] = function (request, data, root) {
  var i4508 = root || request.c( 'FinishTrigger' )
  var i4509 = data
  request.r(i4509[0], i4509[1], 0, i4508, 'trackHandles')
  return i4508
}

Deserializers["PathCreation.PathCreator"] = function (request, data, root) {
  var i4510 = root || request.c( 'PathCreation.PathCreator' )
  var i4511 = data
  i4510.editorData = request.d('PathCreation.PathCreatorData', i4511[0], i4510.editorData)
  i4510.initialized = !!i4511[1]
  return i4510
}

Deserializers["PathCreation.PathCreatorData"] = function (request, data, root) {
  var i4512 = root || request.c( 'PathCreation.PathCreatorData' )
  var i4513 = data
  i4512.vertexPathMaxAngleError = i4513[0]
  i4512.vertexPathMinVertexSpacing = i4513[1]
  i4512.showTransformTool = !!i4513[2]
  i4512.showPathBounds = !!i4513[3]
  i4512.showPerSegmentBounds = !!i4513[4]
  i4512.displayAnchorPoints = !!i4513[5]
  i4512.displayControlPoints = !!i4513[6]
  i4512.bezierHandleScale = i4513[7]
  i4512.globalDisplaySettingsFoldout = !!i4513[8]
  i4512.keepConstantHandleSize = !!i4513[9]
  i4512.showNormalsInVertexMode = !!i4513[10]
  i4512.showBezierPathInVertexMode = !!i4513[11]
  i4512.showDisplayOptions = !!i4513[12]
  i4512.showPathOptions = !!i4513[13]
  i4512.showVertexPathDisplayOptions = !!i4513[14]
  i4512.showVertexPathOptions = !!i4513[15]
  i4512.showNormals = !!i4513[16]
  i4512.showNormalsHelpInfo = !!i4513[17]
  i4512.tabIndex = i4513[18]
  i4512._bezierPath = request.d('PathCreation.BezierPath', i4513[19], i4512._bezierPath)
  i4512.vertexPathUpToDate = !!i4513[20]
  return i4512
}

Deserializers["PathCreation.BezierPath"] = function (request, data, root) {
  var i4514 = root || request.c( 'PathCreation.BezierPath' )
  var i4515 = data
  var i4517 = i4515[0]
  var i4516 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i4517.length; i += 3) {
    i4516.add(new pc.Vec3( i4517[i + 0], i4517[i + 1], i4517[i + 2] ));
  }
  i4514.points = i4516
  i4514.isClosed = !!i4515[1]
  i4514.space = i4515[2]
  i4514.controlMode = i4515[3]
  i4514.autoControlLength = i4515[4]
  i4514.boundsUpToDate = !!i4515[5]
  var i4519 = i4515[6]
  var i4518 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i4519.length; i += 1) {
    i4518.add(i4519[i + 0]);
  }
  i4514.perAnchorNormalsAngle = i4518
  i4514.globalNormalsAngle = i4515[7]
  i4514.flipNormals = !!i4515[8]
  return i4514
}

Deserializers["GameManager"] = function (request, data, root) {
  var i4524 = root || request.c( 'GameManager' )
  var i4525 = data
  request.r(i4525[0], i4525[1], 0, i4524, 'MainCamera')
  i4524.LandscapeFov = i4525[2]
  i4524.PortraitFov = i4525[3]
  i4524.WheatCullDistance = i4525[4]
  request.r(i4525[5], i4525[6], 0, i4524, 'CountdownWidget')
  request.r(i4525[7], i4525[8], 0, i4524, 'TutorialWindow')
  request.r(i4525[9], i4525[10], 0, i4524, 'MainBackroundImage')
  request.r(i4525[11], i4525[12], 0, i4524, 'WinScreen')
  request.r(i4525[13], i4525[14], 0, i4524, 'LoseScreen')
  request.r(i4525[15], i4525[16], 0, i4524, 'MainScreen')
  request.r(i4525[17], i4525[18], 0, i4524, 'btnLeft')
  request.r(i4525[19], i4525[20], 0, i4524, 'btnRight')
  request.r(i4525[21], i4525[22], 0, i4524, 'healthBar')
  var i4527 = i4525[23]
  var i4526 = []
  for(var i = 0; i < i4527.length; i += 2) {
  request.r(i4527[i + 0], i4527[i + 1], 2, i4526, '')
  }
  i4524.Opponents = i4526
  request.r(i4525[24], i4525[25], 0, i4524, 'PlayerCar')
  request.r(i4525[26], i4525[27], 0, i4524, 'CarUserControl')
  i4524.Position = i4525[28]
  request.r(i4525[29], i4525[30], 0, i4524, 'LastCheckpoint')
  request.r(i4525[31], i4525[32], 0, i4524, 'healthController')
  var i4529 = i4525[33]
  var i4528 = []
  for(var i = 0; i < i4529.length; i += 2) {
  request.r(i4529[i + 0], i4529[i + 1], 2, i4528, '')
  }
  i4524.tracktors = i4528
  var i4531 = i4525[34]
  var i4530 = []
  for(var i = 0; i < i4531.length; i += 2) {
  request.r(i4531[i + 0], i4531[i + 1], 2, i4530, '')
  }
  i4524.drivers = i4530
  var i4533 = i4525[35]
  var i4532 = []
  for(var i = 0; i < i4533.length; i += 2) {
  request.r(i4533[i + 0], i4533[i + 1], 2, i4532, '')
  }
  i4524.trackPrefabs = i4532
  request.r(i4525[36], i4525[37], 0, i4524, 'trackParent')
  i4524._WheatCullDistance = i4525[38]
  request.r(i4525[39], i4525[40], 0, i4524, 'trackContentGenerator')
  request.r(i4525[41], i4525[42], 0, i4524, 'wheatGenerator')
  request.r(i4525[43], i4525[44], 0, i4524, 'roadGenerator')
  request.r(i4525[45], i4525[46], 0, i4524, 'ghostReader')
  return i4524
}

Deserializers["LunaUIFields"] = function (request, data, root) {
  var i4538 = root || request.c( 'LunaUIFields' )
  var i4539 = data
  request.r(i4539[0], i4539[1], 0, i4538, 'ObjectiveHintText')
  i4538.ObjectiveHintString = i4539[2]
  request.r(i4539[3], i4539[4], 0, i4538, 'LevelFailedButtonText')
  i4538.LevelFailedButtonString = i4539[5]
  request.r(i4539[6], i4539[7], 0, i4538, 'LevelCompleteButtonText')
  i4538.LevelCompleteButtonString = i4539[8]
  return i4538
}

Deserializers["Localization"] = function (request, data, root) {
  var i4540 = root || request.c( 'Localization' )
  var i4541 = data
  request.r(i4541[0], i4541[1], 0, i4540, 'englishAsset')
  request.r(i4541[2], i4541[3], 0, i4540, 'russianAsset')
  return i4540
}

Deserializers["WheatGenerator"] = function (request, data, root) {
  var i4542 = root || request.c( 'WheatGenerator' )
  var i4543 = data
  request.r(i4543[0], i4543[1], 0, i4542, 'wheatPiece')
  request.r(i4543[2], i4543[3], 0, i4542, 'trackContentGenerator')
  request.r(i4543[4], i4543[5], 0, i4542, 'carUserControl')
  return i4542
}

Deserializers["Products"] = function (request, data, root) {
  var i4544 = root || request.c( 'Products' )
  var i4545 = data
  i4544.OnProductsNumberChanged = request.d('ProductsEvent', i4545[0], i4544.OnProductsNumberChanged)
  return i4544
}

Deserializers["ProductsEvent"] = function (request, data, root) {
  var i4546 = root || request.c( 'ProductsEvent' )
  var i4547 = data
  i4546.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4547[0], i4546.m_PersistentCalls)
  return i4546
}

Deserializers["TrackContentGenerator"] = function (request, data, root) {
  var i4548 = root || request.c( 'TrackContentGenerator' )
  var i4549 = data
  request.r(i4549[0], i4549[1], 0, i4548, 'healthController')
  var i4551 = i4549[2]
  var i4550 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i4551.length; i += 2) {
  request.r(i4551[i + 0], i4551[i + 1], 1, i4550, '')
  }
  i4548.AlreadyGenerated = i4550
  request.r(i4549[3], i4549[4], 0, i4548, 'parentForPlacing')
  var i4553 = i4549[5]
  var i4552 = []
  for(var i = 0; i < i4553.length; i += 2) {
  request.r(i4553[i + 0], i4553[i + 1], 2, i4552, '')
  }
  i4548.obstaclesPrefabs = i4552
  var i4555 = i4549[6]
  var i4554 = []
  for(var i = 0; i < i4555.length; i += 2) {
  request.r(i4555[i + 0], i4555[i + 1], 2, i4554, '')
  }
  i4548.hardObstaclesPrefabs = i4554
  var i4557 = i4549[7]
  var i4556 = []
  for(var i = 0; i < i4557.length; i += 2) {
  request.r(i4557[i + 0], i4557[i + 1], 2, i4556, '')
  }
  i4548.bonusesPrefabs = i4556
  request.r(i4549[8], i4549[9], 0, i4548, 'configFile')
  request.r(i4549[10], i4549[11], 0, i4548, 'products')
  request.r(i4549[12], i4549[13], 0, i4548, 'boosts')
  return i4548
}

Deserializers["Boosts"] = function (request, data, root) {
  var i4560 = root || request.c( 'Boosts' )
  var i4561 = data
  var i4563 = i4561[0]
  var i4562 = new (System.Collections.Generic.List$1(Bridge.ns('Boosts+DataItem')))
  for(var i = 0; i < i4563.length; i += 1) {
    i4562.add(request.d('Boosts+DataItem', i4563[i + 0]));
  }
  i4560.Data = i4562
  return i4560
}

Deserializers["Boosts+DataItem"] = function (request, data, root) {
  var i4566 = root || request.c( 'Boosts+DataItem' )
  var i4567 = data
  i4566.Kind = i4567[0]
  i4566.TimeLeft = i4567[1]
  return i4566
}

Deserializers["GhostWriter"] = function (request, data, root) {
  var i4568 = root || request.c( 'GhostWriter' )
  var i4569 = data
  i4568.timer = i4569[0]
  var i4571 = i4569[1]
  var i4570 = new (System.Collections.Generic.List$1(Bridge.ns('GhostWriter+Entry')))
  for(var i = 0; i < i4571.length; i += 1) {
    i4570.add(request.d('GhostWriter+Entry', i4571[i + 0]));
  }
  i4568.data = i4570
  request.r(i4569[2], i4569[3], 0, i4568, 'carUserControl')
  return i4568
}

Deserializers["GhostWriter+Entry"] = function (request, data, root) {
  var i4574 = root || request.c( 'GhostWriter+Entry' )
  var i4575 = data
  i4574.kind = i4575[0]
  i4574.time = i4575[1]
  i4574.distance = i4575[2]
  i4574.sideOffset = i4575[3]
  i4574.speed = i4575[4]
  return i4574
}

Deserializers["GhostReader"] = function (request, data, root) {
  var i4576 = root || request.c( 'GhostReader' )
  var i4577 = data
  request.r(i4577[0], i4577[1], 0, i4576, 'ghost')
  request.r(i4577[2], i4577[3], 0, i4576, 'pathCreator')
  i4576.timer = i4577[4]
  var i4579 = i4577[5]
  var i4578 = new (System.Collections.Generic.List$1(Bridge.ns('GhostReader+Entry')))
  for(var i = 0; i < i4579.length; i += 1) {
    i4578.add(request.d('GhostReader+Entry', i4579[i + 0]));
  }
  i4576.data = i4578
  return i4576
}

Deserializers["GhostReader+Entry"] = function (request, data, root) {
  var i4582 = root || request.c( 'GhostReader+Entry' )
  var i4583 = data
  i4582.kind = i4583[0]
  i4582.time = i4583[1]
  i4582.distance = i4583[2]
  i4582.sideOffset = i4583[3]
  i4582.speed = i4583[4]
  return i4582
}

Deserializers["RoadGenerator"] = function (request, data, root) {
  var i4584 = root || request.c( 'RoadGenerator' )
  var i4585 = data
  request.r(i4585[0], i4585[1], 0, i4584, 'fencePiece')
  return i4584
}

Deserializers["UnityStandardAssets.Cameras.AutoCam"] = function (request, data, root) {
  var i4586 = root || request.c( 'UnityStandardAssets.Cameras.AutoCam' )
  var i4587 = data
  i4586.m_MoveSpeed = i4587[0]
  i4586.m_TurnSpeed = i4587[1]
  i4586.m_RollSpeed = i4587[2]
  i4586.m_FollowVelocity = !!i4587[3]
  i4586.m_FollowTilt = !!i4587[4]
  i4586.m_SpinTurnLimit = i4587[5]
  i4586.m_TargetVelocityLowerLimit = i4587[6]
  i4586.m_SmoothTurnTime = i4587[7]
  request.r(i4587[8], i4587[9], 0, i4586, 'm_Target')
  i4586.m_AutoTargetPlayer = !!i4587[10]
  i4586.m_UpdateType = i4587[11]
  return i4586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4589 = data
  i4588.enabled = !!i4589[0]
  i4588.aspect = i4589[1]
  i4588.orthographic = !!i4589[2]
  i4588.orthographicSize = i4589[3]
  i4588.backgroundColor = new pc.Color(i4589[4], i4589[5], i4589[6], i4589[7])
  i4588.nearClipPlane = i4589[8]
  i4588.farClipPlane = i4589[9]
  i4588.fieldOfView = i4589[10]
  i4588.depth = i4589[11]
  i4588.clearFlags = i4589[12]
  i4588.cullingMask = i4589[13]
  i4588.rect = i4589[14]
  request.r(i4589[15], i4589[16], 0, i4588, 'targetTexture')
  return i4588
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i4590 = root || request.c( 'CameraFollower' )
  var i4591 = data
  request.r(i4591[0], i4591[1], 0, i4590, 'Target')
  i4590.PositionOffset = new pc.Vec3( i4591[2], i4591[3], i4591[4] )
  i4590.RotationOffset = new pc.Vec3( i4591[5], i4591[6], i4591[7] )
  i4590.CameraSpeed = i4591[8]
  return i4590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i4592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i4593 = data
  i4592.enabled = !!i4593[0]
  i4592.type = i4593[1]
  i4592.color = new pc.Color(i4593[2], i4593[3], i4593[4], i4593[5])
  i4592.cullingMask = i4593[6]
  i4592.intensity = i4593[7]
  i4592.range = i4593[8]
  i4592.spotAngle = i4593[9]
  i4592.shadows = i4593[10]
  i4592.shadowNormalBias = i4593[11]
  i4592.shadowBias = i4593[12]
  i4592.shadowStrength = i4593[13]
  i4592.lightmapBakeType = i4593[14]
  i4592.renderMode = i4593[15]
  request.r(i4593[16], i4593[17], 0, i4592, 'cookie')
  i4592.cookieSize = i4593[18]
  return i4592
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4594 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4595 = data
  request.r(i4595[0], i4595[1], 0, i4594, 'm_FirstSelected')
  i4594.m_sendNavigationEvents = !!i4595[2]
  i4594.m_DragThreshold = i4595[3]
  return i4594
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4596 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4597 = data
  i4596.m_HorizontalAxis = i4597[0]
  i4596.m_VerticalAxis = i4597[1]
  i4596.m_SubmitButton = i4597[2]
  i4596.m_CancelButton = i4597[3]
  i4596.m_InputActionsPerSecond = i4597[4]
  i4596.m_RepeatDelay = i4597[5]
  i4596.m_ForceModuleActive = !!i4597[6]
  return i4596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4599 = data
  i4598.enabled = !!i4599[0]
  i4598.planeDistance = i4599[1]
  i4598.referencePixelsPerUnit = i4599[2]
  i4598.isFallbackOverlay = !!i4599[3]
  i4598.renderMode = i4599[4]
  i4598.renderOrder = i4599[5]
  i4598.sortingLayerName = i4599[6]
  i4598.sortingOrder = i4599[7]
  i4598.scaleFactor = i4599[8]
  request.r(i4599[9], i4599[10], 0, i4598, 'worldCamera')
  i4598.overrideSorting = !!i4599[11]
  i4598.pixelPerfect = !!i4599[12]
  i4598.targetDisplay = i4599[13]
  i4598.overridePixelPerfect = !!i4599[14]
  return i4598
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4600 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4601 = data
  i4600.m_UiScaleMode = i4601[0]
  i4600.m_ReferencePixelsPerUnit = i4601[1]
  i4600.m_ScaleFactor = i4601[2]
  i4600.m_ReferenceResolution = new pc.Vec2( i4601[3], i4601[4] )
  i4600.m_ScreenMatchMode = i4601[5]
  i4600.m_MatchWidthOrHeight = i4601[6]
  i4600.m_PhysicalUnit = i4601[7]
  i4600.m_FallbackScreenDPI = i4601[8]
  i4600.m_DefaultSpriteDPI = i4601[9]
  i4600.m_DynamicPixelsPerUnit = i4601[10]
  return i4600
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4602 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4603 = data
  i4602.m_IgnoreReversedGraphics = !!i4603[0]
  i4602.m_BlockingObjects = i4603[1]
  i4602.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4603[2] )
  return i4602
}

Deserializers["Countdown"] = function (request, data, root) {
  var i4604 = root || request.c( 'Countdown' )
  var i4605 = data
  request.r(i4605[0], i4605[1], 0, i4604, 'CountdownText')
  request.r(i4605[2], i4605[3], 0, i4604, 'Go_Image')
  request.r(i4605[4], i4605[5], 0, i4604, 'Outline')
  request.r(i4605[6], i4605[7], 0, i4604, 'MainWindow')
  return i4604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i4606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i4607 = data
  i4606.m_Alpha = i4607[0]
  i4606.m_Interactable = !!i4607[1]
  i4606.m_BlocksRaycasts = !!i4607[2]
  i4606.m_IgnoreParentGroups = !!i4607[3]
  i4606.enabled = !!i4607[4]
  return i4606
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i4608 = root || request.c( 'UnityEngine.UI.Outline' )
  var i4609 = data
  i4608.m_EffectColor = new pc.Color(i4609[0], i4609[1], i4609[2], i4609[3])
  i4608.m_EffectDistance = new pc.Vec2( i4609[4], i4609[5] )
  i4608.m_UseGraphicAlpha = !!i4609[6]
  return i4608
}

Deserializers["WinScreenWidget"] = function (request, data, root) {
  var i4610 = root || request.c( 'WinScreenWidget' )
  var i4611 = data
  request.r(i4611[0], i4611[1], 0, i4610, 'RaceCar')
  request.r(i4611[2], i4611[3], 0, i4610, 'WheatText')
  request.r(i4611[4], i4611[5], 0, i4610, 'GemText')
  request.r(i4611[6], i4611[7], 0, i4610, 'GameManager')
  request.r(i4611[8], i4611[9], 0, i4610, 'products')
  return i4610
}

Deserializers["EndGameButton"] = function (request, data, root) {
  var i4612 = root || request.c( 'EndGameButton' )
  var i4613 = data
  request.r(i4613[0], i4613[1], 0, i4612, 'GameManager')
  return i4612
}

Deserializers["LongTapButton"] = function (request, data, root) {
  var i4614 = root || request.c( 'LongTapButton' )
  var i4615 = data
  i4614.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i4615[0], i4614.OnMouseDownEvent)
  i4614.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i4615[1], i4614.OnMouseUpEvent)
  return i4614
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i4616 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i4617 = data
  i4616.m_Spacing = i4617[0]
  i4616.m_ChildForceExpandWidth = !!i4617[1]
  i4616.m_ChildForceExpandHeight = !!i4617[2]
  i4616.m_ChildControlWidth = !!i4617[3]
  i4616.m_ChildControlHeight = !!i4617[4]
  i4616.m_ChildScaleWidth = !!i4617[5]
  i4616.m_ChildScaleHeight = !!i4617[6]
  i4616.m_Padding = UnityEngine.RectOffset.FromPaddings(i4617[7], i4617[8], i4617[9], i4617[10])
  i4616.m_ChildAlignment = i4617[11]
  return i4616
}

Deserializers["BoostsPanelCtrl"] = function (request, data, root) {
  var i4618 = root || request.c( 'BoostsPanelCtrl' )
  var i4619 = data
  request.r(i4619[0], i4619[1], 0, i4618, 'boosts')
  request.r(i4619[2], i4619[3], 0, i4618, 'wgtBoostPrefab')
  return i4618
}

Deserializers["CheatSpeedTuning"] = function (request, data, root) {
  var i4620 = root || request.c( 'CheatSpeedTuning' )
  var i4621 = data
  request.r(i4621[0], i4621[1], 0, i4620, 'txtSpeed')
  request.r(i4621[2], i4621[3], 0, i4620, 'slider')
  return i4620
}

Deserializers["FPSWriter"] = function (request, data, root) {
  var i4622 = root || request.c( 'FPSWriter' )
  var i4623 = data
  i4622.m_refreshTime = i4623[0]
  return i4622
}

Deserializers["TimeSinceStartup"] = function (request, data, root) {
  var i4624 = root || request.c( 'TimeSinceStartup' )
  var i4625 = data
  request.r(i4625[0], i4625[1], 0, i4624, 'Text')
  return i4624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i4626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i4627 = data
  i4626.name = i4627[0]
  i4626.atlasId = i4627[1]
  i4626.mipmapCount = i4627[2]
  i4626.hdr = !!i4627[3]
  i4626.size = i4627[4]
  i4626.anisoLevel = i4627[5]
  i4626.filterMode = i4627[6]
  i4626.wrapMode = i4627[7]
  var i4629 = i4627[8]
  var i4628 = []
  for(var i = 0; i < i4629.length; i += 4) {
    i4628.push( UnityEngine.Rect.MinMaxRect(i4629[i + 0], i4629[i + 1], i4629[i + 2], i4629[i + 3]) );
  }
  i4626.rects = i4628
  return i4626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4633 = data
  i4632.name = i4633[0]
  i4632.index = i4633[1]
  i4632.startup = !!i4633[2]
  return i4632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4635 = data
  i4634.ambientIntensity = i4635[0]
  i4634.reflectionIntensity = i4635[1]
  i4634.ambientMode = i4635[2]
  i4634.ambientLight = new pc.Color(i4635[3], i4635[4], i4635[5], i4635[6])
  i4634.ambientSkyColor = new pc.Color(i4635[7], i4635[8], i4635[9], i4635[10])
  i4634.ambientGroundColor = new pc.Color(i4635[11], i4635[12], i4635[13], i4635[14])
  i4634.ambientEquatorColor = new pc.Color(i4635[15], i4635[16], i4635[17], i4635[18])
  i4634.fogColor = new pc.Color(i4635[19], i4635[20], i4635[21], i4635[22])
  i4634.fogEndDistance = i4635[23]
  i4634.fogStartDistance = i4635[24]
  i4634.fogDensity = i4635[25]
  i4634.fog = !!i4635[26]
  request.r(i4635[27], i4635[28], 0, i4634, 'skybox')
  i4634.fogMode = i4635[29]
  var i4637 = i4635[30]
  var i4636 = []
  for(var i = 0; i < i4637.length; i += 1) {
    i4636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4637[i + 0]) );
  }
  i4634.lightmaps = i4636
  i4634.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4635[31], i4634.lightProbes)
  i4634.lightmapsMode = i4635[32]
  i4634.environmentLightingMode = i4635[33]
  i4634.ambientProbe = new pc.SphericalHarmonicsL2(i4635[34])
  request.r(i4635[35], i4635[36], 0, i4634, 'customReflection')
  request.r(i4635[37], i4635[38], 0, i4634, 'defaultReflection')
  i4634.defaultReflectionMode = i4635[39]
  i4634.defaultReflectionResolution = i4635[40]
  i4634.sunLightObjectId = i4635[41]
  i4634.pixelLightCount = i4635[42]
  i4634.defaultReflectionHDR = !!i4635[43]
  i4634.hasLightDataAsset = !!i4635[44]
  i4634.hasManualGenerate = !!i4635[45]
  return i4634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4641 = data
  request.r(i4641[0], i4641[1], 0, i4640, 'lightmapColor')
  request.r(i4641[2], i4641[3], 0, i4640, 'lightmapDirection')
  return i4640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4642 = root || new UnityEngine.LightProbes()
  var i4643 = data
  return i4642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4651 = data
  i4650.name = i4651[0]
  var i4653 = i4651[1]
  var i4652 = []
  for(var i = 0; i < i4653.length; i += 1) {
    i4652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4653[i + 0]) );
  }
  i4650.passes = i4652
  var i4655 = i4651[2]
  var i4654 = []
  for(var i = 0; i < i4655.length; i += 1) {
    i4654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4655[i + 0]) );
  }
  i4650.defaultParameterValues = i4654
  return i4650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4658 = root || new pc.UnityShaderPass()
  var i4659 = data
  i4658.passType = i4659[0]
  i4658.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4659[1], i4658.zTest)
  i4658.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4659[2], i4658.zWrite)
  i4658.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4659[3], i4658.culling)
  i4658.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4659[4], i4658.blending)
  i4658.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4659[5], i4658.alphaBlending)
  i4658.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4659[6], i4658.colorWriteMask)
  i4658.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4659[7], i4658.offsetUnits)
  i4658.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4659[8], i4658.offsetFactor)
  i4658.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4659[9], i4658.stencilRef)
  i4658.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4659[10], i4658.stencilReadMask)
  i4658.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4659[11], i4658.stencilWriteMask)
  i4658.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4659[12], i4658.stencilOp)
  i4658.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4659[13], i4658.stencilOpFront)
  i4658.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4659[14], i4658.stencilOpBack)
  var i4661 = i4659[15]
  var i4660 = []
  for(var i = 0; i < i4661.length; i += 1) {
    i4660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4661[i + 0]) );
  }
  i4658.tags = i4660
  var i4663 = i4659[16]
  var i4662 = []
  for(var i = 0; i < i4663.length; i += 1) {
    i4662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4663[i + 0]) );
  }
  i4658.variants = i4662
  return i4658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4665 = data
  i4664.val = i4665[0]
  i4664.name = i4665[1]
  return i4664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4667 = data
  i4666.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4667[0], i4666.src)
  i4666.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4667[1], i4666.dst)
  i4666.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4667[2], i4666.op)
  return i4666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4669 = data
  i4668.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4669[0], i4668.pass)
  i4668.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4669[1], i4668.fail)
  i4668.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4669[2], i4668.zFail)
  i4668.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4669[3], i4668.comp)
  return i4668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4673 = data
  i4672.name = i4673[0]
  i4672.value = i4673[1]
  return i4672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4677 = data
  var i4679 = i4677[0]
  var i4678 = []
  for(var i = 0; i < i4679.length; i += 1) {
    i4678.push( i4679[i + 0] );
  }
  i4676.keywords = i4678
  i4676.vertexProgram = i4677[1]
  i4676.fragmentProgram = i4677[2]
  return i4676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4685 = data
  i4684.name = i4685[0]
  i4684.type = i4685[1]
  i4684.value = new pc.Vec4( i4685[2], i4685[3], i4685[4], i4685[5] )
  i4684.textureValue = i4685[6]
  return i4684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4687 = data
  i4686.name = i4687[0]
  request.r(i4687[1], i4687[2], 0, i4686, 'texture')
  i4686.aabb = i4687[3]
  i4686.vertices = i4687[4]
  i4686.triangles = i4687[5]
  i4686.textureRect = UnityEngine.Rect.MinMaxRect(i4687[6], i4687[7], i4687[8], i4687[9])
  i4686.packedRect = UnityEngine.Rect.MinMaxRect(i4687[10], i4687[11], i4687[12], i4687[13])
  i4686.border = new pc.Vec4( i4687[14], i4687[15], i4687[16], i4687[17] )
  i4686.transparency = i4687[18]
  i4686.bounds = i4687[19]
  i4686.pixelsPerUnit = i4687[20]
  i4686.textureWidth = i4687[21]
  i4686.textureHeight = i4687[22]
  i4686.nativeSize = new pc.Vec2( i4687[23], i4687[24] )
  i4686.pivot = new pc.Vec2( i4687[25], i4687[26] )
  i4686.textureRectOffset = new pc.Vec2( i4687[27], i4687[28] )
  return i4686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4689 = data
  i4688.name = i4689[0]
  i4688.wrapMode = i4689[1]
  i4688.isLooping = !!i4689[2]
  i4688.length = i4689[3]
  var i4691 = i4689[4]
  var i4690 = []
  for(var i = 0; i < i4691.length; i += 1) {
    i4690.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4691[i + 0]) );
  }
  i4688.curves = i4690
  var i4693 = i4689[5]
  var i4692 = []
  for(var i = 0; i < i4693.length; i += 1) {
    i4692.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4693[i + 0]) );
  }
  i4688.events = i4692
  i4688.halfPrecision = !!i4689[6]
  return i4688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4697 = data
  i4696.path = i4697[0]
  i4696.componentType = i4697[1]
  i4696.property = i4697[2]
  i4696.keys = i4697[3]
  var i4699 = i4697[4]
  var i4698 = []
  for(var i = 0; i < i4699.length; i += 1) {
    i4698.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4699[i + 0]) );
  }
  i4696.objectReferenceKeys = i4698
  return i4696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4703 = data
  i4702.time = i4703[0]
  request.r(i4703[1], i4703[2], 0, i4702, 'value')
  return i4702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4707 = data
  i4706.functionName = i4707[0]
  i4706.floatParameter = i4707[1]
  i4706.intParameter = i4707[2]
  i4706.stringParameter = i4707[3]
  request.r(i4707[4], i4707[5], 0, i4706, 'objectReferenceParameter')
  i4706.time = i4707[6]
  return i4706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4709 = data
  i4708.name = i4709[0]
  i4708.ascent = i4709[1]
  i4708.originalLineHeight = i4709[2]
  i4708.fontSize = i4709[3]
  var i4711 = i4709[4]
  var i4710 = []
  for(var i = 0; i < i4711.length; i += 1) {
    i4710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4711[i + 0]) );
  }
  i4708.characterInfo = i4710
  request.r(i4709[5], i4709[6], 0, i4708, 'texture')
  i4708.originalFontSize = i4709[7]
  return i4708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4715 = data
  i4714.index = i4715[0]
  i4714.advance = i4715[1]
  i4714.bearing = i4715[2]
  i4714.glyphWidth = i4715[3]
  i4714.glyphHeight = i4715[4]
  i4714.minX = i4715[5]
  i4714.maxX = i4715[6]
  i4714.minY = i4715[7]
  i4714.maxY = i4715[8]
  i4714.uvBottomLeftX = i4715[9]
  i4714.uvBottomLeftY = i4715[10]
  i4714.uvBottomRightX = i4715[11]
  i4714.uvBottomRightY = i4715[12]
  i4714.uvTopLeftX = i4715[13]
  i4714.uvTopLeftY = i4715[14]
  i4714.uvTopRightX = i4715[15]
  i4714.uvTopRightY = i4715[16]
  return i4714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4717 = data
  i4716.name = i4717[0]
  var i4719 = i4717[1]
  var i4718 = []
  for(var i = 0; i < i4719.length; i += 1) {
    i4718.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4719[i + 0]) );
  }
  i4716.states = i4718
  var i4721 = i4717[2]
  var i4720 = []
  for(var i = 0; i < i4721.length; i += 1) {
    i4720.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4721[i + 0]) );
  }
  i4716.layers = i4720
  var i4723 = i4717[3]
  var i4722 = []
  for(var i = 0; i < i4723.length; i += 1) {
    i4722.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4723[i + 0]) );
  }
  i4716.parameters = i4722
  return i4716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4727 = data
  i4726.cycleOffset = i4727[0]
  i4726.cycleOffsetParameter = i4727[1]
  i4726.cycleOffsetParameterActive = !!i4727[2]
  i4726.mirror = !!i4727[3]
  i4726.mirrorParameter = i4727[4]
  i4726.mirrorParameterActive = !!i4727[5]
  i4726.motionId = i4727[6]
  i4726.nameHash = i4727[7]
  i4726.fullPathHash = i4727[8]
  i4726.speed = i4727[9]
  i4726.speedParameter = i4727[10]
  i4726.speedParameterActive = !!i4727[11]
  i4726.tag = i4727[12]
  i4726.name = i4727[13]
  i4726.writeDefaultValues = !!i4727[14]
  var i4729 = i4727[15]
  var i4728 = []
  for(var i = 0; i < i4729.length; i += 1) {
    i4728.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4729[i + 0]) );
  }
  i4726.transitions = i4728
  var i4731 = i4727[16]
  var i4730 = []
  for(var i = 0; i < i4731.length; i += 2) {
  request.r(i4731[i + 0], i4731[i + 1], 2, i4730, '')
  }
  i4726.behaviours = i4730
  return i4726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4735 = data
  i4734.fullPath = i4735[0]
  i4734.canTransitionToSelf = !!i4735[1]
  i4734.duration = i4735[2]
  i4734.exitTime = i4735[3]
  i4734.hasExitTime = !!i4735[4]
  i4734.hasFixedDuration = !!i4735[5]
  i4734.interruptionSource = i4735[6]
  i4734.offset = i4735[7]
  i4734.orderedInterruption = !!i4735[8]
  i4734.destinationStateNameHash = i4735[9]
  i4734.destinationStateMachineId = i4735[10]
  i4734.isExit = !!i4735[11]
  i4734.mute = !!i4735[12]
  i4734.solo = !!i4735[13]
  var i4737 = i4735[14]
  var i4736 = []
  for(var i = 0; i < i4737.length; i += 1) {
    i4736.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4737[i + 0]) );
  }
  i4734.conditions = i4736
  return i4734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4743 = data
  i4742.blendingMode = i4743[0]
  i4742.defaultWeight = i4743[1]
  i4742.name = i4743[2]
  i4742.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4743[3], i4742.stateMachine)
  return i4742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4745 = data
  i4744.id = i4745[0]
  i4744.defaultStateNameHash = i4745[1]
  var i4747 = i4745[2]
  var i4746 = []
  for(var i = 0; i < i4747.length; i += 1) {
    i4746.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4747[i + 0]) );
  }
  i4744.entryTransitions = i4746
  var i4749 = i4745[3]
  var i4748 = []
  for(var i = 0; i < i4749.length; i += 1) {
    i4748.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4749[i + 0]) );
  }
  i4744.anyStateTransitions = i4748
  return i4744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4753 = data
  i4752.destinationStateNameHash = i4753[0]
  i4752.destinationStateMachineId = i4753[1]
  i4752.isExit = !!i4753[2]
  i4752.mute = !!i4753[3]
  i4752.solo = !!i4753[4]
  var i4755 = i4753[5]
  var i4754 = []
  for(var i = 0; i < i4755.length; i += 1) {
    i4754.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4755[i + 0]) );
  }
  i4752.conditions = i4754
  return i4752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4759 = data
  i4758.defaultBool = !!i4759[0]
  i4758.defaultFloat = i4759[1]
  i4758.defaultInt = i4759[2]
  i4758.name = i4759[3]
  i4758.nameHash = i4759[4]
  i4758.type = i4759[5]
  return i4758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4761 = data
  i4760.name = i4761[0]
  i4760.bytes64 = i4761[1]
  i4760.data = i4761[2]
  return i4760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4763 = data
  var i4765 = i4763[0]
  var i4764 = []
  for(var i = 0; i < i4765.length; i += 1) {
    i4764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4765[i + 0]) );
  }
  i4762.files = i4764
  i4762.componentToPrefabIds = i4763[1]
  return i4762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4769 = data
  i4768.path = i4769[0]
  request.r(i4769[1], i4769[2], 0, i4768, 'unityObject')
  return i4768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4771 = data
  var i4773 = i4771[0]
  var i4772 = []
  for(var i = 0; i < i4773.length; i += 1) {
    i4772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4773[i + 0]) );
  }
  i4770.scriptsExecutionOrder = i4772
  var i4775 = i4771[1]
  var i4774 = []
  for(var i = 0; i < i4775.length; i += 1) {
    i4774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4775[i + 0]) );
  }
  i4770.sortingLayers = i4774
  var i4777 = i4771[2]
  var i4776 = []
  for(var i = 0; i < i4777.length; i += 1) {
    i4776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4777[i + 0]) );
  }
  i4770.cullingLayers = i4776
  i4770.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4771[3], i4770.timeSettings)
  i4770.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4771[4], i4770.physicsSettings)
  i4770.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4771[5], i4770.physics2DSettings)
  i4770.removeShadows = !!i4771[6]
  i4770.autoInstantiatePrefabs = !!i4771[7]
  i4770.enableAutoInstancing = !!i4771[8]
  i4770.lightmapEncodingQuality = i4771[9]
  i4770.desiredColorSpace = i4771[10]
  return i4770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4781 = data
  i4780.name = i4781[0]
  i4780.value = i4781[1]
  return i4780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4785 = data
  i4784.id = i4785[0]
  i4784.name = i4785[1]
  i4784.value = i4785[2]
  return i4784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4789 = data
  i4788.id = i4789[0]
  i4788.name = i4789[1]
  return i4788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4791 = data
  i4790.fixedDeltaTime = i4791[0]
  i4790.maximumDeltaTime = i4791[1]
  i4790.timeScale = i4791[2]
  i4790.maximumParticleTimestep = i4791[3]
  return i4790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4793 = data
  i4792.gravity = new pc.Vec3( i4793[0], i4793[1], i4793[2] )
  i4792.defaultSolverIterations = i4793[3]
  i4792.bounceThreshold = i4793[4]
  i4792.autoSyncTransforms = !!i4793[5]
  i4792.autoSimulation = !!i4793[6]
  var i4795 = i4793[7]
  var i4794 = []
  for(var i = 0; i < i4795.length; i += 1) {
    i4794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4795[i + 0]) );
  }
  i4792.collisionMatrix = i4794
  return i4792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4799 = data
  i4798.enabled = !!i4799[0]
  i4798.layerId = i4799[1]
  i4798.otherLayerId = i4799[2]
  return i4798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4801 = data
  request.r(i4801[0], i4801[1], 0, i4800, 'material')
  i4800.gravity = new pc.Vec2( i4801[2], i4801[3] )
  i4800.positionIterations = i4801[4]
  i4800.velocityIterations = i4801[5]
  i4800.velocityThreshold = i4801[6]
  i4800.maxLinearCorrection = i4801[7]
  i4800.maxAngularCorrection = i4801[8]
  i4800.maxTranslationSpeed = i4801[9]
  i4800.maxRotationSpeed = i4801[10]
  i4800.timeToSleep = i4801[11]
  i4800.linearSleepTolerance = i4801[12]
  i4800.angularSleepTolerance = i4801[13]
  i4800.defaultContactOffset = i4801[14]
  i4800.autoSimulation = !!i4801[15]
  i4800.queriesHitTriggers = !!i4801[16]
  i4800.queriesStartInColliders = !!i4801[17]
  i4800.callbacksOnDisable = !!i4801[18]
  i4800.reuseCollisionCallbacks = !!i4801[19]
  i4800.autoSyncTransforms = !!i4801[20]
  var i4803 = i4801[21]
  var i4802 = []
  for(var i = 0; i < i4803.length; i += 1) {
    i4802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4803[i + 0]) );
  }
  i4800.collisionMatrix = i4802
  return i4800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4807 = data
  i4806.enabled = !!i4807[0]
  i4806.layerId = i4807[1]
  i4806.otherLayerId = i4807[2]
  return i4806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4811 = data
  i4810.weight = i4811[0]
  i4810.vertices = i4811[1]
  i4810.normals = i4811[2]
  i4810.tangents = i4811[3]
  return i4810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4815 = data
  i4814.mode = i4815[0]
  i4814.parameter = i4815[1]
  i4814.threshold = i4815[2]
  return i4814
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"name":0,"passes":1,"defaultParameterValues":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"variants":16},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"removeShadows":6,"autoInstantiatePrefabs":7,"enableAutoInstancing":8,"lightmapEncodingQuality":9,"desiredColorSpace":10},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"90":[91],"92":[91],"93":[91],"94":[91],"95":[91],"96":[91],"97":[51],"98":[57],"99":[34],"100":[34],"101":[34],"102":[34],"103":[34],"104":[34],"105":[34],"106":[107],"108":[107],"109":[107],"110":[107],"111":[107],"112":[107],"113":[107],"114":[107],"115":[107],"116":[107],"117":[107],"118":[107],"119":[107],"120":[57],"121":[10],"122":[123],"124":[123],"78":[18],"13":[15],"125":[18],"83":[33],"37":[35],"36":[45],"38":[35],"126":[127],"128":[18],"129":[24,18],"80":[78],"23":[24,18],"130":[18],"79":[78],"131":[18],"132":[18],"84":[18],"133":[18],"27":[18],"134":[18],"135":[18],"136":[18],"137":[24,18],"138":[24,18],"139":[18],"140":[18],"141":[18],"20":[18],"22":[24,18],"142":[18],"143":[76],"144":[76],"77":[76],"145":[76],"146":[57],"147":[57],"148":[18],"149":[24,18],"150":[10],"151":[24,18],"152":[24,18],"153":[10,24,18],"154":[18,24],"155":[18]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SphereCollider","UnityEngine.MonoBehaviour","UnselectedColliderDrawer","WheatPieceDestroyer","WheatPieceRandomizer","DisableIfTooFar","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Texture2D","DamagingObstacle","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","LootableItem","LightPole","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Slider","WheatSliderWidget","UnityEngine.UI.Text","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.LayoutElement","HealthBar","ShieldBar","UnityEngine.GameObject","UIActiveBoost","ShootButtonCtrl","UnityEngine.UI.Button","UnityEngine.Rigidbody","CarController","WheelEffects","CarUserControl","UnityStandardAssets.Vehicles.Car.CarAudio","UnityEngine.BoxCollider","RaceCar","HealthController","Gun","JustWheelMeshes","BlobShadowMovement","UnityEngine.AudioSource","Rocket","Explosion","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","DriverDescription","UnityEngine.SkinnedMeshRenderer","TrackHandles","PathCreation.PathCreator","UnityEngine.MeshCollider","FinishTrigger","GameManager","UnityEngine.Camera","Countdown","UnityEngine.CanvasGroup","LongTapButton","TrackContentGenerator","WheatGenerator","RoadGenerator","GhostReader","LunaUIFields","Localization","UnityEngine.TextAsset","Products","Boosts","GhostWriter","UnityStandardAssets.Cameras.AutoCam","UnityEngine.AudioListener","CameraFollower","UnityEngine.LightProbeGroup","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Outline","WinScreenWidget","EndGameButton","UnityEngine.UI.HorizontalLayoutGroup","BoostsPanelCtrl","CheatSpeedTuning","FPSWriter","TimeSinceStartup","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ButtonInput","SWS.PathRenderer","UnityEngine.LineRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.16f1";

Deserializers.applicationIdentifier = "com.DefaultCompany.TribezRacingPlayable";

Deserializers.disableAntiAliasing = true;

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

