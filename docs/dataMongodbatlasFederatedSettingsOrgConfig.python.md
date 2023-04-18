# `data_mongodbatlas_federated_settings_org_config`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_federated_settings_org_config`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/federated_settings_org_config).

# `dataMongodbatlasFederatedSettingsOrgConfig` Submodule <a name="`dataMongodbatlasFederatedSettingsOrgConfig` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasFederatedSettingsOrgConfig <a name="DataMongodbatlasFederatedSettingsOrgConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/federated_settings_org_config mongodbatlas_federated_settings_org_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_config

dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  federation_settings_id: str,
  org_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/federated_settings_org_config#federation_settings_id DataMongodbatlasFederatedSettingsOrgConfig#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/federated_settings_org_config#org_id DataMongodbatlasFederatedSettingsOrgConfig#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/federated_settings_org_config#id DataMongodbatlasFederatedSettingsOrgConfig#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.federationSettingsId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/federated_settings_org_config#federation_settings_id DataMongodbatlasFederatedSettingsOrgConfig#federation_settings_id}.

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.orgId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/federated_settings_org_config#org_id DataMongodbatlasFederatedSettingsOrgConfig#org_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/federated_settings_org_config#id DataMongodbatlasFederatedSettingsOrgConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_config

dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_config

dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_config

dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.domainAllowList">domain_allow_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.domainRestrictionEnabled">domain_restriction_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.postAuthRoleGrants">post_auth_role_grants</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.roleMappings">role_mappings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList">DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.userConflicts">user_conflicts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList">DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.federationSettingsIdInput">federation_settings_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `domain_allow_list`<sup>Required</sup> <a name="domain_allow_list" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.domainAllowList"></a>

```python
domain_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_restriction_enabled`<sup>Required</sup> <a name="domain_restriction_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.domainRestrictionEnabled"></a>

```python
domain_restriction_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `post_auth_role_grants`<sup>Required</sup> <a name="post_auth_role_grants" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.postAuthRoleGrants"></a>

```python
post_auth_role_grants: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_mappings`<sup>Required</sup> <a name="role_mappings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.roleMappings"></a>

```python
role_mappings: DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList">DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList</a>

---

##### `user_conflicts`<sup>Required</sup> <a name="user_conflicts" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.userConflicts"></a>

```python
user_conflicts: DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList">DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList</a>

---

##### `federation_settings_id_input`<sup>Optional</sup> <a name="federation_settings_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.federationSettingsIdInput"></a>

```python
federation_settings_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.federationSettingsId"></a>

```python
federation_settings_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasFederatedSettingsOrgConfigConfig <a name="DataMongodbatlasFederatedSettingsOrgConfigConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_config

dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  federation_settings_id: str,
  org_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.property.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/federated_settings_org_config#federation_settings_id DataMongodbatlasFederatedSettingsOrgConfig#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.property.orgId">org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/federated_settings_org_config#org_id DataMongodbatlasFederatedSettingsOrgConfig#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/federated_settings_org_config#id DataMongodbatlasFederatedSettingsOrgConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.property.federationSettingsId"></a>

```python
federation_settings_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/federated_settings_org_config#federation_settings_id DataMongodbatlasFederatedSettingsOrgConfig#federation_settings_id}.

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/federated_settings_org_config#org_id DataMongodbatlasFederatedSettingsOrgConfig#org_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/federated_settings_org_config#id DataMongodbatlasFederatedSettingsOrgConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasFederatedSettingsOrgConfigRoleMappings <a name="DataMongodbatlasFederatedSettingsOrgConfigRoleMappings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappings.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_config

dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappings()
```


### DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignments <a name="DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignments.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_config

dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignments()
```


### DataMongodbatlasFederatedSettingsOrgConfigUserConflicts <a name="DataMongodbatlasFederatedSettingsOrgConfigUserConflicts" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflicts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflicts.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_config

dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflicts()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList <a name="DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_config

dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference <a name="DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_config

dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.property.externalGroupName">external_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.property.roleAssignments">role_assignments</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList">DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappings">DataMongodbatlasFederatedSettingsOrgConfigRoleMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_group_name`<sup>Required</sup> <a name="external_group_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.property.externalGroupName"></a>

```python
external_group_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `role_assignments`<sup>Required</sup> <a name="role_assignments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.property.roleAssignments"></a>

```python
role_assignments: DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList">DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasFederatedSettingsOrgConfigRoleMappings
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappings">DataMongodbatlasFederatedSettingsOrgConfigRoleMappings</a>

---


### DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList <a name="DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_config

dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference <a name="DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_config

dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignments">DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignments
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignments">DataMongodbatlasFederatedSettingsOrgConfigRoleMappingsRoleAssignments</a>

---


### DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList <a name="DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_config

dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference <a name="DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_config

dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.property.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflicts">DataMongodbatlasFederatedSettingsOrgConfigUserConflicts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.property.federationSettingsId"></a>

```python
federation_settings_id: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflictsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasFederatedSettingsOrgConfigUserConflicts
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfig.DataMongodbatlasFederatedSettingsOrgConfigUserConflicts">DataMongodbatlasFederatedSettingsOrgConfigUserConflicts</a>

---



